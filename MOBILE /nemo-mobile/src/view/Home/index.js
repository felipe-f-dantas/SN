import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import styles from './styles';

//Componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import TaskCard from '../../components/TaskCard';

// API
import api from '../../services/api'

export default function Home(){

    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);

    async function loadTask(){
        setLoad(true)
        await api.get('/task/filter/all/11:11:11:11:11:11').then(response =>{
            setTasks(response.data)
            setLoad(false);
        });
    }

    useEffect(()=>{
        loadTask();
    },[])


    return(

        <View style={styles.container}>
            <Header showNotification={true}/>
            <View style={styles.filter}>
                <TouchableOpacity onPress={()=> setFilter('all')}>
                    <Text style={ filter === 'all' ? styles.filterTextActived : styles.filterTextInative}>TODOS</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setFilter('today')}>
                    <Text style={ filter === 'today' ? styles.filterTextActived : styles.filterTextInative}>HOJE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setFilter('week')}>
                    <Text style={ filter === 'week' ? styles.filterTextActived : styles.filterTextInative}>SEMANA</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setFilter('mouth')}>
                    <Text style={ filter === 'mouth' ? styles.filterTextActived : styles.filterTextInative}>MES</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setFilter('year')}>
                    <Text style={ filter === 'year' ? styles.filterTextActived : styles.filterTextInative}>ANO</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                    <Text style={styles.titleText}>TAREFAS</Text>
            </View>

                <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                  {
                     load ? <ActivityIndicator color='#EB6800' size={50}/> :
                        tasks.map(t =>(

                            <TaskCard done={false} title={t.title} when={t.when}/>
                        ))
                    }
                </ScrollView>
            <Footer icon={'plus'}/>
        </View>
    )
}


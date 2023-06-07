import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

//Componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import TaskCard from '../../components/TaskCard';

export default function Home(){

    const [filter, setFilter] = useState('today')

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
                <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>

                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>


                </ScrollView>
            <Footer icon={'plus'}/>
        </View>
    )
}


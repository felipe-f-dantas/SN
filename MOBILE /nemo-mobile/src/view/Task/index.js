import React, {useState, useEffect} from 'react';
import {View, Text,TextInput, KeyboardAvoidingView, Switch,TouchableOpacity, ScrollView,Image} from 'react-native';
import styles from './styles';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons'
// API
import api from '../../services/api'

export default function Task(){

    const [done, setDone] = useState(false);



    return(

       <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Header showBack={true}/>
        <ScrollView styles={{width:'100%'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                {
                typeIcons.map(icon => (
                    icon != null &&
                <TouchableOpacity>
                    <Image source={icon} style={styles.styleIcons}/>

                </TouchableOpacity>
                    ))
                }


            </ScrollView>
            <Text style={styles.label}>Titulo</Text>
            <TextInput style={styles.input} maxLength={30} placeholder='Lembre-me de fazer ...'/>

            <Text style={styles.label}>Detalhes</Text>
            <TextInput style={styles.inputArea} maxLength={200} multiline={true} placeholder='Detalhes da atividade ...'/>

            <View style={styles.inLine}>
                <View style={styles.inputLine}>
                    <Switch onValueChange={()=>setDone(!done)} value={done} thumbColor={done ? '#00761b' : '#EB6800'}/>
                    <Text style={styles.switchLabel}>CONCLUIDO</Text>
                </View>
                
                <TouchableOpacity>
                    <Text style={styles.removeLabel}>EXCLUIR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        <Footer icon={'save'}/>
       </KeyboardAvoidingView>
    )
}


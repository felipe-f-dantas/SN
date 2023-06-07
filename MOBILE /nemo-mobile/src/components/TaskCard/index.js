import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import styles from './styles';

import iconDefault from '../../assets/default.png'


export default function TaskCard(){

    const [filter, setFilter] = useState('today')

    return(
        <TouchableOpacity style={styles.card}>
            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActived}/>
                <Text style={styles.cardTitle}>Fazer Relatorio</Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>17/12/2022</Text>
                <Text style={styles.cardHour}>18:00</Text>
            </View>
        </TouchableOpacity>
    )
}


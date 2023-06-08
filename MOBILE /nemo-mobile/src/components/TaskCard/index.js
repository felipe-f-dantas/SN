import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import styles from './styles';
import {format} from 'date-fns';

import iconDefault from '../../assets/default.png'


export default function TaskCard({done, title, when}){

    const [filter, setFilter] = useState('today')

    return(
        <TouchableOpacity style={[styles.card, done && styles.done]}>
            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActived}/>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format (new Date(when), 'dd/MM/yyyy') }</Text>
                <Text style={styles.cardHour}>{format (new Date(when), 'HH:mm') }</Text>
            </View>
        </TouchableOpacity>
    )
}


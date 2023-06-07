import React from 'react';
import {View, Text, Image,TouchableOpacity } from 'react-native';
import styles from './styles';

//icones 
import plus from '../../assets/plus.png';
import v from '../../assets/v.png';



export default function Footer({icon}){
        return(

            <View style={styles.container}>
              <TouchableOpacity style={styles.button}>
                    <Image source={icon === 'plus' ? plus : v} style={styles.image}/>
              </TouchableOpacity>
              <Text style={styles.text}> &copy; Felipe Dantas, Todos os direitos reservados</Text>
            </View>
        )
}
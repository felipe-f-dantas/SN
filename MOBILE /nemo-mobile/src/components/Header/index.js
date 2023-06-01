import React from 'react';
import {View, Text, Image } from 'react-native';
import styles from './styles';

//icones 
import logo from '../../assets/logo.png';

export default function Header(){
        return(

            <View style={styles.header}>
                <Image source={logo} style={styles.logo}/>
            </View>
        )
}
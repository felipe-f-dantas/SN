import React from 'react';
import {View, Text, Image,TouchableOpacity } from 'react-native';
import styles from './styles';

//icones 
import logo from '../../assets/logo.png';
import bell from '../../assets/Vector-1.png';
import qrcode from '../../assets/Vector.png';
import back from '../../assets/Vector-5.png';


export default function Header({showNotification, showBack}){
        return(

            <View style={styles.header}>
                { 
                showBack ?
                <TouchableOpacity style={styles.leftIcon}>
                <Image source={back} sstyle={styles.leftIconImage}/>
                </TouchableOpacity>
                        :
                <TouchableOpacity style={styles.leftIcon}>
                <Image source={qrcode} sstyle={styles.leftIconImage}/>
                </TouchableOpacity>
                }

                <Image source={logo} style={styles.logo}/>

                    {
                    showNotification && 
                        <TouchableOpacity style={styles.notification}>
                        <Image source={bell} style={styles.notificationImage}/>
                            <View style={styles.circle}>
                                <Text style={styles.notificationText}>3</Text>
                            </View>
                        </TouchableOpacity>
                    }
            </View>
        )
}
import React from 'react';
import {View, Text, Image,TouchableOpacity } from 'react-native';
import styles from './styles';

//icones 
import logo from '../../assets/logo.png';
import bell from '../../assets/Vector-1.png';
import qrcode from '../../assets/Vector.png';
import back from '../../assets/Vector-5.png';


export default function Header({showNotification, showBack, pressNotification, late}){
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
                    showNotification && late > 0 &&
                        <TouchableOpacity style={styles.notification} onPress={pressNotification}>
                        <Image source={bell} style={styles.notificationImage}/>
                            <View style={styles.circle}>
                                <Text style={styles.notificationText}>{late}</Text>
                            </View>
                        </TouchableOpacity>
                    }
            </View>
        )
}
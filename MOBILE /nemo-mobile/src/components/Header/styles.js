import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
        header:{

            width: '100%',
            height: 90,
            backgroundColor: '#250C77',
            borderBottomWidth:5,
            borderBottomColor: '#EB6800',
            alignItems: 'center',
            justifyContent: 'center'

        },
        logo:{
            width: 100,
            height: 30,
            

        },
        notification:{
            position: 'absolute',
            right: 20
        },
        notificationText:{
            fontWeight: 'bold',
            color: '#EB6800'
        },
        notificationImage:{
            width: 20,
            height:25,
        },
        circle:{
           width: 20,
           backgroundColor: '#fff',
           borderRadius: 50,
           alignItems: 'center',
           justifyContent: 'center',
           position: 'absolute',
           left:13,
           bottom: 13
        },
        leftIcon: {
            position: 'absolute',
            left: 20
        },
        leftIconImage:{
            width: 30,
            height:25,
        }
});



export default styles;
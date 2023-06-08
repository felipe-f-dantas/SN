import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        marginVertical: 5,
        height: 70,
        shadowColor:'#000',
        
        shadowOffset:{
            width:0,
            height:2,
        }, 
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
        borderRadius: 5,
    },
    cardLeft:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeActived:{
        width:50,
        height: 50
    },
    cardTitle:{
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    cardRight:{
        alignItems:'flex-end',
        justifyContent: 'space-between'
    },
    cardDate:{
        color: '#EB6800',
        fontWeight: 'bold',
        fontSize: 15
    },
    cardHour:{
        color: '#250C77',
        fontWeight: 'bold',

    },
   
    done:{
        opacity: 0.5
    }
});



export default styles;
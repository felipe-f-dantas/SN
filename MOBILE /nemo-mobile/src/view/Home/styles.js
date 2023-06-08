import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        filter:{
            flexDirection: 'row',
            width: '100%',
            height: 70,
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        filterTextActived:{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#EB6800'
        },
        filterTextInative:{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#250C77',
            opacity: 0.5
        },
        title:{
            width:'100%',
            borderBottomWidth:1,
            borderColor: '#250C77',
            alignItems: 'center',

        },
        titleText:{
            color: '#250C77',
            fontSize: 15,
            fontWeight: 'bold',
            position: 'relative',
            top:10,
            backgroundColor: '#fff',
            paddingHorizontal:10
        },
        content:{
            width: '100%',
            marginTop:30,
            marginBottom:80
    
    
        },
});



export default styles;
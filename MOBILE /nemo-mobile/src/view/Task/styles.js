import { StyleSheet} from 'react-native';


const styles  = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'flex-start',
        justifyContent: 'flex-start'
    },
    styleIcons:{
        width:50,
        height:50,
        marginHorizontal:30,

    },
    label:{
       color:'#707070',
       fontSize:16,
       paddingHorizontal:10,
       marginTop:20,
       marginBottom:5
    },
    input:{
        fontSize:16,
        padding:10,
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'#EB6800',
        marginHorizontal:10
    },
  
    inputArea:{
        fontSize:16,
        padding:10,
        width:'90%',
        borderWidth:1,
        borderColor:'#EB6800',
        marginHorizontal:10,
        borderRadius:10,
        height:100,
        textAlignVertical: 'top'
    },
    inLine:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingRight:30
    },
      inputLine:{
        flexDirection: 'row',
        alignItems:'center',
        marginVertical: 10
    },
    switchLabel:{
        fontWeight: 'bold',
        color: '#EB6800',
        fontSize:16,
        paddingLeft:10
    },
    removeLabel:{
        fontWeight: 'bold',
        color: '#250C77',
        fontSize:16,
    }
})

export default styles;
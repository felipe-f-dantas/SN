import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container:{
        width: '100%',
        height: 70,
        backgroundColor: '#250C77',
        position: 'absolute',
        bottom: 0,
        borderTopWidth:5,
        borderTopColor: '#EB6800',
        alignItems: 'center'
  },

  button:{
    position: 'relative',
    top:-65
  },
  image:{
    width:60,
    height:60
  },
  text:{
    position: 'relative',
    fontSize:12,
    top: -30,
    color: '#fff',
    fontWeight: 'bold'
  }
});



export default styles;
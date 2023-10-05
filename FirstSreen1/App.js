import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.imageCircle} source={require('./assets/Circle.png')}></Image>
        
          <Text style={styles.textH1}>
            GROW {'\n'}
            YOUR BUSINESS</Text> 
          <Text style={styles.textH2}>We will help you to grow your business using {'\n'}online server </Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.textH3}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSign} >
              <Text style={styles.textH4}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageCircle:{
    width:150,
    height:150, 
  },
  textH1:{
      textAlign:'center',
      fontSize:30,
      fontWeight:'800'
  },
  textH2:{
    fontSize:17,
    textAlign:'center',
    fontWeight:'600'
  },
  button:{
    width:300,
    height:70,
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  buttonLogin:{
    backgroundColor:'#E3C000',
    height:50,
    width:120,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    
  },
  buttonSign:{
    backgroundColor:'#E3C000',
    height:50,
    width:120,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    
  },
  textH3:{
    fontSize:19,
    fontWeight:'700'
  },
  textH4:{
    fontSize:19,
    fontWeight:'700'
  }
});

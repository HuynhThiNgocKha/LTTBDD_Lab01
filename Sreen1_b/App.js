import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Image style={styles.imagelock} source={require('./assets/lock.png')}></Image>
      <Text style={styles.textH1}>
        FORGET{'\n'} PASSWORD
      </Text>
      <Text style={styles.textH2}>
       Provide your account's email for which you {'\n'} want to reset your password
      </Text>
      
      <View style={styles.rectangle}>
        <Image style={styles.imageEmail} source={require('./assets/mail.png')}></Image>
        <Text style={styles.textEmail}>Email</Text>
      </View>

      <TouchableOpacity style={styles.button} >
          <Text style={styles.textNext}>NEXT</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',  
    textAlign: "center",
  },
  imagelock:{
    width:120,
    height: 130,
  },
  textH1:{
    textAlign:'center',
    fontSize: 20,
    fontWeight: '800',
    
  },
  textH2:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',

  },
  button:{
    backgroundColor:'#E3C000',
    width: 330,
    height: 45,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',  
  },
  textNext:{
    fontSize: 25,
    textAlign: 'center',
  },
  rectangle:{
    backgroundColor: '#C4C4C4',
    width: 330,
    height: 45,
    flexDirection:'row',
    alignItems:'center'

  },
  imageEmail:{
    width: 50,
    heitgh:45

  },
  textEmail:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500'
    
  }

 
});

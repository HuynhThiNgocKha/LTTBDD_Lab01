import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textCode}>CODE</Text>
      <Text style={styles.textVer}>VERIFICATION</Text>
      <Text style={styles.textEnter}>Enter ontime password sent on {'\n'}            ++849092605798</Text>
      <View style={styles.square}>
        <View style={styles.square1}></View>
        <View style={styles.square2}></View>
        <View style={styles.square3}></View>
        <View style={styles.square4}></View>
        <View style={styles.square5}></View>
        <View style={styles.square6}></View>
      </View>
      <TouchableOpacity style={styles.button} >
                <Text style={styles.textVerify}>VERIFY CODE</Text>
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

  },
  textCode:{
    fontSize: 60,
    fontWeight: 700,
  },
  textVer:{
    fontSize:30,
    fontWeight:650,
  },
  textEnter:{
    fontSize:20,
    fontWeight:700,
  }, 
  button:{
    backgroundColor:'#E3C000',
    width: 330,
    height: 45,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',  
  },
  textVerify:{
    fontSize:19,
    fontWeight:600,
  },
  square:{
    display: "flex",
    flexDirection: "row",
    marginBottom : 20
  },
  square1:{
     width: '50px',
      height: '50px',
      border: '1px solid #000000',
  },
  square2:{
    width: '50px',
     height: '50px',
     border: '1px solid #000000',
  },
  square3:{
    width: '50px',
     height: '50px',
     border: '1px solid #000000',
  },
  square4:{
    width: '50px',
     height: '50px',
     border: '1px solid #000000',
  },
  square5:{
    width: '50px',
     height: '50px',
     border: '1px solid #000000',
  },
  square6:{
    width: '50px',
     height: '50px',
     border: '1px solid #000000',
  },
});

import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

  export default function Login({route,navigation}) {
  return (
  <View style={styles.container}>
      <View >
        <Text style={styles.loginText}>Login</Text>
      </View>

      <View style={styles.input}>
      <TextInput placeholder="E-mail" style={styles.textPlaceholder}></TextInput>
      </View>
      
      <View style={styles.input}>
      <TextInput placeholder="Senha" style={styles.textPlaceholder} secureTextEntry={true} ></TextInput>
      </View>
      
        <TouchableOpacity style={styles.loginButton}
         onPress = {
            () => navigation.navigate('ListaContatos')
          }
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.signInButton}  
        onPress = {
          () => navigation.navigate('Cadastro')
        }>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>


    </View>  
    
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButton:{
    height:50,
    witdh:"80%",
    borderStyle:"solid",
    borderWidth:0.5,
    marginTop:20,
    paddingRight:"25%",
    paddingLeft:"25%",
    justifyContent:"center",
    borderRadius:10,
    backgroundColor:"#ff0000",
  },

  signInButton:{
    height:50,
    witdh:"80%",
    borderStyle:"solid",
    borderWidth:0.5,
    marginTop:20,
    paddingRight:"22.2%",
    paddingLeft:"22.2%",
    justifyContent:"center",
    borderRadius:10,
    backgroundColor:"#ff0000"

  },

  loginText:{
    marginBottom:80,
    fontSize:40,
    fontWeight:"bold"
  },

  input:{
    width:"70%",
    height:40,
    justifyContent:"center",
    marginBottom:20,
    borderStyle:"solid",
    borderWidth:0.5,
  },

  textPlaceholder:{
    height:50,
    flex:1,
    textAlign:"center"
  },

  textButton:{
    color:"#fff"
  }
 

});

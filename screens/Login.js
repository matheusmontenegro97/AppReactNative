import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { initializeApp } from "firebase/app";

  export default function SignIn({route,navigation}) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const firebaseConfig = {
      apiKey: "AIzaSyCy60QCztxEo9xvTp6O7bPooZqWFG05wZI",
      authDomain: "appmobilematheus.firebaseapp.com",
      projectId: "appmobilematheus",
      storageBucket: "appmobilematheus.appspot.com",
      messagingSenderId: "1044712664622",
      appId: "1:1044712664622:web:f0f55d2e9c15f90e6e39bf"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    function loginfirebase() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in
          console.log("funcionando")
          const user = userCredential.user;
          navigation.navigate('ListaContatos')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  
  return (
  <View style={styles.container}>
      <View >
        <Text style={styles.loginText}>Login</Text>
      </View>

      <View style={styles.input}>
      <TextInput placeholder="E-mail" value={email} onChangeText={email=> setEmail(email)} style={styles.textPlaceholder}></TextInput>
      </View>
      
      <View style={styles.input}>
      <TextInput placeholder="Senha" value={senha} onChangeText={senha=> setSenha(senha)} style={styles.textPlaceholder} secureTextEntry={true} ></TextInput>
      </View>
      
        <TouchableOpacity style={styles.loginButton}
         onPress={()=>{loginfirebase()}}
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
    width:"80%",
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
    width:"80%",
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

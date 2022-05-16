import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";



export default function Contato({route,navigation}) {
 // const navigation = useNavigation();

 const [getNome,setNome] = useState();
 const [getCpf,setCpf] = useState();
const [getTelefone,setTelefone] = useState();
 const [getId,setId] = useState();
 
 useEffect(()=>{

  if(route.params){
    const { nome } =  route.params 
    const { cpf } = route.params 
    const { telefone } = route.params
    const { id } = route.params

      setNome(nome);
      setCpf(cpf);
      setTelefone(telefone);
      setId(id);
      
  }
      
  }, [])


  function editarDados(){

    const result =  axios.put('http://professornilson.com/testeservico/clientes/'+getId, {
        nome: getNome,
        cpf: getCpf,
        telefone: getTelefone
      })
      .then(function (response) {
        setNome('');
        setCpf('');
        setTelefone('');
        setId('');
        showMessage({
          message: "Registro Alterado com Sucesso!!",
          type: "success",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
  }


  function excluirDados(){

    const result =  axios.delete('http://professornilson.com/testeservico/clientes/'+getId, {
        nome: getNome,
        cpf: getCpf,
        telefone: getTelefone
      })
      .then(function (response) {
        setNome('');
        setCpf('');
        setTelefone('');
        setId('');
        showMessage({
          message: "Registro Excluido com Sucesso!!",
          type: "danger",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
  }


  return (
      
  <View style={{ flex: 1}}>

<Header 
    style={styles.headerStyle}
  placement="center"
  leftComponent={{ icon: 'arrow-left', color: '#fff', onPress: () => navigation.navigate('ListaContatos')} }
  centerComponent={{ text: 'Editar Contato', style: { color: '#fff', fontSize:25} }}
/>


    <View style={styles.container}>

      <View style={styles.input}>
      <TextInput placeholder="Nome" style={styles.textPlaceholder} onChangeText={text => setNome(text)}
      value={getNome}></TextInput>
      </View>

      <View style={styles.input}>
      <TextInput placeholder="Cpf" style={styles.textPlaceholder} onChangeText={text => setCpf(text)}
      value={getCpf}></TextInput>
      </View>
      
      <View style={styles.input}>
      <TextInput placeholder="Telefone" style={styles.textPlaceholder} onChangeText={text => setTelefone(text)}
      value={getTelefone}></TextInput>
      </View>
     
      <TouchableOpacity style={styles.signInButton} onPress={() => editarDados()}>
          <Text style={styles.textButton}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.textButton} onPress={() => excluirDados()}>Excluir</Text>
        </TouchableOpacity>
        </View>
    </View>  
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:"100vh",
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

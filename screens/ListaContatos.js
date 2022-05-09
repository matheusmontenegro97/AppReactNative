import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements'
import { ListItem, Avatar } from 'react-native-elements'




export default function ListaContatos({route,navigation}) {
 // const navigation = useNavigation();

 const [getData, setData] = useState([]);

 useEffect(()=>{
         
   async function resgataUsuario(){
       const result = await axios(
           'http://professornilson.com/testeservico/clientes',
         );
         setData(result.data);
   }
   resgataUsuario();
 })

  return (  
  <View style={{ flex: 1}}>

<Header 
    style={styles.headerStyle}
  placement="center"
  rightComponent={ {icon:'add', color:'#fff', onPress: () => navigation.navigate('Contato')}}
  centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize:25} }}
/>

<View>
  {
    getData.map((l, i) => (
      <ListItem onPress={() =>navigation.navigate('AlteracaoContato')} key={i} bottomDivider>
        <Avatar source={{uri: "https://ih1.redbubble.net/image.2961457200.6670/st,small,507x507-pad,600x600,f8f8f8.jpg"}} />
        <ListItem.Content>
          <ListItem.Title>{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
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

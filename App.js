import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import CadastroScreen from './screens/Cadastro';
import ListaContatoScreen from './screens/ListaContatos'
import ContatoScreen from './screens/Contato'
import AlteracaoContatoScreen from './screens/AlteracaoContato';


const Stack = createNativeStackNavigator();

 export default function App() {

  return (

     <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="ListaContatos" component={ListaContatoScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Contato" component={ContatoScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="AlteracaoContato" component={AlteracaoContatoScreen} options={{ headerShown: false }}/>
     </Stack.Navigator>
   </NavigationContainer>
    
  );
} 



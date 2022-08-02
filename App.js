
import { StyleSheet, Text, View } from 'react-native';
import home from './src/paginas/home';
import contato from './src/paginas/contato';
import sobre from './src/paginas/sobre';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


 export default function App() {
  return (
    <NavigationContainer>
      
    <Tab.Navigator>

      <Tab.Screen name = 'HOME' component = {home}></Tab.Screen>
      <Tab.Screen name = 'Contato' component = {contato}></Tab.Screen>    
      <Tab.Screen name = 'Sobre' component = {sobre}></Tab.Screen>

      

    </Tab.Navigator>
    </NavigationContainer>
  );
}



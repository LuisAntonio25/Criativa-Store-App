import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Produto from './src/pages/Produto';
import Suporte from './src/pages/Suporte';

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#112039" />
      <Drawer.Navigator>
          <Drawer.Screen name="Home" component={ Home }  />
          <Drawer.Screen name="Login" component={ Login } />
          <Drawer.Screen name="Produto" component={ Produto } />
          <Drawer.Screen name="Cadastro" component={ Cadastro } />
          <Drawer.Screen name="Suporte" component={ Suporte } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
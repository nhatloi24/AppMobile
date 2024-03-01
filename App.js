/* eslint-disable prettier/prettier */
import {SafeAreaView, StatusBar, View} from 'react-native';
import React from "react";
import Navigators from "./src/navigators";
import AuthProvider from './src/context/AuthProvider';
import CartProvider from './src/context/CartProvider';
import  DrawerSceneWrapper from './src/components';
import 'react-native-gesture-handler'

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent barStyle={'light-content'} backgroundColor='transparent' />
      <AuthProvider>
        <CartProvider>
          <Navigators />
        </CartProvider>
      </AuthProvider>
    </SafeAreaView>
  );
 };
 export default App;
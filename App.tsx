import React from 'react';
import { StatusBar, View } from 'react-native';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <View >
      <StatusBar translucent={false}></StatusBar>
      <Login></Login>
    </View>
  );
}


import React from 'react';
import { StatusBar, View } from 'react-native';
import { Login } from './src/screens/Login';
import { styleConstants } from './src/Utils/styleUtils';
import { Cadastro } from './src/screens/Cadastro';

export default function App() {
  //TODO: useSafeAreaInsets para pegar alturas e lados seguros do ios e android quando usar navegação
  // {
  //   flex: 1,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   backgroundColor: styleConstants.backgroundColor,
  //   paddingTop: insets.top,
  //   paddingBottom: insets.bottom,
  //   paddingLeft: insets.left,
  //   paddingRight: insets.right,
  // }

  return (
    <View style={{ backgroundColor: styleConstants.backgroundColor, flex: 1 }}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      {/* <Login /> */}
      <Cadastro />
    </View>
  );
}

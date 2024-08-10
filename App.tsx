import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <View >
      <StatusBar translucent={false}></StatusBar>
      <Login></Login>
    </View>
  );
}


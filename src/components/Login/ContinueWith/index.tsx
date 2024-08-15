import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const ContinueWith = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Ou continue com</Text>
      <View style={styles.line} />
    </View>
  );
};
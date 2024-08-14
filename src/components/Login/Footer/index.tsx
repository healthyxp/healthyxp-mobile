import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ContinueWith } from '../ContinueWith';
import { styles } from './styles';
import google from '../../../assets/images/google_2x.png';
import facebook from '../../../assets/images/facebook.png';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <ContinueWith />
      <View style={styles.body}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={google}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={facebook}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text>Não tem conta?</Text>
        <TouchableOpacity>
          <Text style={styles.linkCriarConta}>Crie agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
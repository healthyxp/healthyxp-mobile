import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FacebookIcon from '../../../assets/images/facebook.png';
import GoogleIcon from '../../../assets/images/google_2x.png';
import { ContinueWith } from '../ContinueWith';
import { styles } from './styles';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <ContinueWith />
      <View style={styles.body}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={GoogleIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={FacebookIcon}
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
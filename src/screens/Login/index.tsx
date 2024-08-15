import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/BaseComponents/Button';
import { Input } from '../../components/BaseComponents/Input';
import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Login/Footer';
import { styles } from './styles';

export const Login = () => {
  return (
    <View>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.body}>
        <Input
          icon='mail'
          placeholder='Email'
        />
        <Input
          icon='lock-closed'
          placeholder='Senha'
          isPassword={true}
        />
      </View>
      <TouchableOpacity style={styles.containerLink}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <Button title='Entrar' />
      </View>
      <Footer />
    </View>
  );
};
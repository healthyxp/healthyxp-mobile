import React from "react";
import { View } from "react-native";
import { styles } from "../Login/styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/BaseComponents/Input";
import { Button } from "../../components/BaseComponents/Button";
import { Footer } from "../../components/Login/Footer";

export const Cadastro = () => {
  return (
    <View>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.body}>
        <Input
          icon='person'
          placeholder='Nome'
        />
        <Input
          icon='mail'
          placeholder='Email' />
        <Input
          icon='lock-closed'
          placeholder='Senha'
          isPassword={true}
        />
      </View>
      <View style={styles.button}>
        <Button title='Cadastrar' />
      </View>
      <Footer />
    </View>
  )
}
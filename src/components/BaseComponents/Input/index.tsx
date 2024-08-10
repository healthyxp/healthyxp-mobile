import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
}

export const Input = ({ icon, isPassword = false, ...rest }: InputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(isPassword);
  const textInputRef = useRef<TextInput>(null);

  function focusOnTextInput() {
    textInputRef.current?.focus();
  }

  function seePassword() {
    setSecureTextEntry(!secureTextEntry);
  }
  //TODO: aumentar o tam do placeholder
  return (
    <View style={styles.container}>
      {icon &&
        <Ionicons
          style={styles.icon}
          name={icon}
          size={20}
          onPress={focusOnTextInput}
          color={"#D9D9D9"}
        />
      }
      <TextInput
        ref={textInputRef}
        style={styles.input}
        clearButtonMode="always" //TODO: só funciona no IOS, testar se funciona mesmo
        secureTextEntry={secureTextEntry}
        {...rest}
      />
      {isPassword &&
        <Ionicons
          style={styles.icon}
          name={secureTextEntry ? "eye-off" : "eye"}
          size={25}
          onPress={seePassword}
          color={"#D9D9D9"}
        />
      }
    </View>
  );
};
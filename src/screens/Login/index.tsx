import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { Input } from "../../components/BaseComponents/Input";

export const Login = () => {
	return (
		<View style={styles.container}>
			<Text>Login</Text>
			<Input
				label="Usuário"
				placeholder="usuario"
			/>
			<Input
				label="Senha"
				placeholder="senha"
			/>
		</View>
	);
};
import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

export const Login = () => {
	return (
		<View style={styles.container}>
			<Text>Login</Text>

			<TextInput placeholder='usuario'></TextInput>
		</View>
	)
}
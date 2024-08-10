import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/BaseComponents/Button';
import { Input } from '../../components/BaseComponents/Input';
import { styles } from './styles';

export const Login = () => {
	return (
		<View style={styles.container}>
			<Text>Login</Text>
			<Input
				icon='mail'
				placeholder='Email'
			/>
			<Input
				icon='lock-closed'
				placeholder='Senha'
				isPassword={true}
			/>

			<Button title='Entrar' />
		</View>
	);
};
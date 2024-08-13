import React from 'react';
import { StatusBar, View } from 'react-native';
import { Button } from '../../components/BaseComponents/Button';
import { Input } from '../../components/BaseComponents/Input';
import { Logo } from '../../components/BaseComponents/Logo';
import { styles } from './styles';

export const Login = () => {
	return (
		<View>
			<StatusBar translucent={false} backgroundColor={'#17DABE'} />
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

				<Button title='Entrar' />
			</View>

		</View>
	);
};
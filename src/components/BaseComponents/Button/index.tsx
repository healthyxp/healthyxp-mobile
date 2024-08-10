import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity >
  )
}
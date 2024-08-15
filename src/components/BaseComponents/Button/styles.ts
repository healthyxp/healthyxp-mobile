import { StyleSheet } from 'react-native';
import { styleConstants } from '../../../Utils/styleUtils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.color,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2F2F2'
  }
});
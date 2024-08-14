import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  text: {
    marginHorizontal: 10,
    color: '#000',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'transparent',
    borderBottomColor: '#17DABE',
    borderBottomWidth: 1,
    marginHorizontal: 5,
  }
});
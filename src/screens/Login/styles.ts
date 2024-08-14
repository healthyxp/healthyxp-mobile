import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    padding: 30,
    paddingTop: 70,
    paddingBottom: 5,
    width: '100%',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    backgroundColor: '#17DABE',
    width: '100%',
    height: 250,
    borderBottomRightRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },

  link: {
    color: '#17DABE',
    textDecorationLine: 'underline'
  },

  containerLink: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 40,
    paddingBottom: 30
  },

  button: {
    width: '100%',
    alignItems: 'center'
  }
});
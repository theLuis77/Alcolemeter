// styles.js

import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#007BFF', // Azul
  secondary: '#6C757D', // Gris
  background: '#F8F9FA', // Gris claro
  text: '#212529', // Casi negro
  button: '#FFC107', // Amarillo
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: colors.text,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.button,
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
});

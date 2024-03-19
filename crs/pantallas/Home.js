import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleCrearCuentaPress = () => {
    navigation.navigate('CrearCuenta');
  };

  const handleIniciarSesionPress = () => {
    navigation.navigate('InicioSecion');
  };
  const DatosdeUsuarios = () => {
    navigation.navigate('DatosUsuario');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
      <TouchableOpacity style={styles.button} onPress={handleCrearCuentaPress}>
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleIniciarSesionPress}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={DatosdeUsuarios}>
        <Text style={styles.buttonText}>Accesi de Admin </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default HomeScreen;

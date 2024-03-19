import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IniciarSesionScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storeToken = async (userToken) => {
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch (error) {
      console.log('Error al guardar el token', error);
    }
  };

  const iniciarSesion = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, ingresa tu email y contraseña.');
      return;
    }

    try {
      // Simulando una petición de inicio de sesión. Sustituye esto con tu lógica de autenticación real.
      const response = await fetch('https://tuapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }

      const data = await response.json();
      await storeToken(data.token); // Almacenar el token recibido

      // Navegar a la pantalla principal o dashboard si el inicio de sesión es exitoso.
      navigation.navigate('PantallaPrincipal');
    } catch (error) {
      Alert.alert('Error', 'Falló el inicio de sesión. Verifica tus credenciales.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={iniciarSesion} style={styles.button}>
        Iniciar Sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    paddingVertical: 6,
  },
});

export default IniciarSesionScreen;

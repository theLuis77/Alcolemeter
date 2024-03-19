// CrearCuenta.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { conectarBD } from './Conexion/database';
// import { generarToken } from './Conexion/auth';

const CrearCuenta = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [placa, setPlaca] = useState('');
  const [tel, setTel] = useState('');
  const [cel, setCel] = useState('');
  const [ficha, setFicha] = useState('');
  const [carro, setCarro] = useState('');
  const [permiso, setPermiso] = useState('');

  const handleCrearCuentaPress = async () => {
    try {
      const connection = await conectarBD();
      const [results] = await connection.execute(
        'INSERT INTO usuarios (nombre, correo, contraseña, placa, tel, cel, ficha, carro, permiso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, correo, contraseña, placa, tel, cel, ficha, carro, permiso]
      );
      console.log('Usuario creado exitosamente:', results);

      // Generar un token JWT
      const token = generarToken(correo);

      await connection.end();
      // Almacenar el token en el dispositivo o donde sea necesario
      // Luego navegar a la siguiente pantalla
      navigation.navigate('PerfilUsuario');
    } catch (error) {
      console.error('Error al crear cuenta:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Placa"
        value={placa}
        onChangeText={setPlaca}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={tel}
        onChangeText={setTel}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Celular"
        value={cel}
        onChangeText={setCel}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Ficha"
        value={ficha}
        onChangeText={setFicha}
      />
      <TextInput
        style={styles.input}
        placeholder="Carro"
        value={carro}
        onChangeText={setCarro}
      />
      <TextInput
        style={styles.input}
        placeholder="Permiso"
        value={permiso}
        onChangeText={setPermiso}
      />
      <TouchableOpacity style={styles.button} onPress={handleCrearCuentaPress}>
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CrearCuenta;

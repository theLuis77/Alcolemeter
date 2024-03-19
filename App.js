import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaCrearCuenta from './crs/PantallaCrearCuenta';
import PantallaDatosUsuario from './crs/PantallaDatosUsuario';
import PerfilUsuario from './crs/PerfilUsuario';
import Home from './crs/pantallas/Home';
import * as SecureStore from 'expo-secure-store'; // Importa expo-secure-store
import { conectarBD } from './crs/Conexion/database'; // Importa tu función conectarBD

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    conectarBD(); // Llama a la función conectarBD para conectar a la base de datos MySQL
  }, []);

  // Función para guardar el token en SecureStore
  const guardarToken = async (token) => {
    try {
      await SecureStore.setItemAsync('token', token);
    } catch (error) {
      console.error('Error al guardar el token:', error);
    }
  };

  // Función para obtener el token desde SecureStore
  const obtenerToken = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      return token;
    } catch (error) {
      console.error('Error al obtener el token:', error);
      return null;
    }
  };

  // Función para eliminar el token de SecureStore
  const eliminarToken = async () => {
    try {
      await SecureStore.deleteItemAsync('token');
    } catch (error) {
      console.error('Error al eliminar el token:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{ title: 'pantallaHome' }}
        />
        <Stack.Screen
          name="CrearCuenta"
          component={PantallaCrearCuenta}
          options={{ title: 'CrearCuenta' }}
        />
        <Stack.Screen
          name="DatosUsuario"
          component={PantallaDatosUsuario}
          options={{ title: 'DatosUsuario' }}
        />
        <Stack.Screen
          name="PerfilUsuario"
          component={PerfilUsuario}
          options={{ title: 'PerfilUsuario' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

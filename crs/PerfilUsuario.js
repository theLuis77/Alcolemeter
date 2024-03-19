// PNATLLA DE USUARIO =

import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image, Button } from 'react-native';

const PantallaVisualizarDatosUsuario = ({ navigation }) => {
  // Supongamos que tienes los datos del usuario disponibles
  const usuario = {
    nombre: '',
    placa: '',
    tel: '',
    cel: '',
    ficha: '',
    carro: '',
    permiso: '',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Datos del Usuario</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.carImage}
          source={require('./img/carro.png')} // Reemplaza 'car_image.png' con la ruta de tu imagen de carro
          resizeMode="contain"
        />
      </View>
      {/* // comando para centrar { alignItems: 'center' } */}
      <View style={[styles.dataContainer,/* centrar*/ { alignItems: 'center' }]}> 
        <Text style={styles.label}>Nombre: </Text>
        <Text style={styles.data}>{usuario.nombre}</Text>

        <Text style={styles.label}>Placa: </Text>
        <Text style={styles.data}>{usuario.placa}</Text>

        <Text style={styles.label}>Teléfono: </Text>
        <Text style={styles.data}>{usuario.tel}</Text>

        <Text style={styles.label}>Celular: </Text>
        <Text style={styles.data}>{usuario.cel}</Text>

        <Text style={styles.label}>Ficha: </Text>
        <Text style={styles.data}>{usuario.ficha}</Text>

        <Text style={styles.label}>Vehículo: </Text>
        <Text style={styles.data}>{usuario.carro}</Text>

        <Text style={styles.label}>Permiso: </Text>
        <Text style={styles.data}>{usuario.permiso}</Text>
      </View>
      <Button title="Notificasiones y Mensages" onPress={() => navigation.navigate('MensajesNotificaciones')} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c2c2c',
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#d2a16b',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  carImage: {
    width: 200,
    height: 150,
  },
  dataContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#d2a16b',
  },
  data: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
});

export default PantallaVisualizarDatosUsuario;

// PATALL DE ADMIN 

import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, View, Button } from 'react-native';

const PantallaDatosUsuario = ({ navigation }) => {
  const [placa, setPlaca] = useState('');
  const [tel, setTel] = useState('');
  const [cel, setCel] = useState('');
  const [ficha, setFicha] = useState('');
  const [carro, setCarro] = useState('');
  const [permiso, setPermiso] = useState('');
  const [contenidoAlcohol, setContenidoAlcohol] = useState('');

  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Alkalimeter</Text>
      
      {/* circulo */}  

      <View style={styles.circuloContenedor}>
        <View style={[styles.circulo, { backgroundColor: '#d2a16b' }]}>
          <Text style={styles.textoCirculo}>{contenidoAlcohol}70%</Text>
        </View>
      </View>

      <Text style={styles.subtitulo}>Datos del Usuario</Text>
      <View style={styles.separador} />

      <View style={styles.contenedorEntradas}>
        <Text style={styles.etiqueta}>Placa</Text>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese la placa"
          value={placa}
          onChangeText={(texto) => setPlaca(texto)}
        />

        <Text style={styles.etiqueta}>Telefono</Text>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese el teléfono"
          value={tel}
          onChangeText={(texto) => setTel(texto)}
        />

        <Text style={styles.etiqueta}>Celular figo </Text>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese el celular"
          value={cel}
          onChangeText={(texto) => setCel(texto)}
        />

        <Text style={styles.etiqueta}>Ficha</Text>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese la ficha"
          value={ficha}
          onChangeText={(texto) => setFicha(texto)}
        />

        <Text style={styles.etiqueta}>Carro Electronico </Text>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese el tipo de carro"
          value={carro}
          onChangeText={(texto) => setCarro(texto)}
        />

        <Text style={styles.etiqueta}>Permiso</Text>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese el permiso"
          value={permiso}
          onChangeText={(texto) => setPermiso(texto)}
        />
      </View>

      <Text style={styles.subtitulo}>Resultados del Examen de Alcohol</Text>
      <View style={styles.separador} />

      <View style={styles.contenedorEntradas}>

      <Button title="Ir a Crear Cuenta" onPress={() => navigation.navigate('CrearCuenta')} />

        <Text style={styles.etiqueta}>Contenido de Alcohol</Text>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese el nivel de alcohol"
          value={contenidoAlcohol}
          onChangeText={(texto) => setContenidoAlcohol(texto)}
        />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#2c2c2c',
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d2a16b',
    textAlign: 'center',
  },
  circuloContenedor: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circulo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCirculo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#d2a16b',
    textAlign: 'center',
  },
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#d2a16b',
    width: '100%',
    marginBottom: 10,
  },
  contenedorEntradas: {
    width: '100%',
    marginBottom: 20,
  },
  etiqueta: {
    fontSize: 16,
    marginBottom: 5,
    color: '#d2a16b',
  },
  entrada: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: 'black',
  },
   button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default PantallaDatosUsuario;

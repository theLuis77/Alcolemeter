import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Cambia esto por la URL de tu servidor backend

// Función para obtener usuarios
const obtenerUsuarios = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/usuarios`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
};

// Función para crear un usuario
const crearUsuario = async (usuario) => {
    try {
        const response = await axios.post(`${BASE_URL}/usuarios`, usuario);
        return response.data;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};

export { obtenerUsuarios, crearUsuario };

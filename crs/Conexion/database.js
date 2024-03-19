import express from 'express';
import mysql from 'mysql';

const app = express();

// Configuración de la conexión a la base de datos
const connection = mysql.createPool({
  host: 'localhost', // Dirección de tu servidor MySQL
  user: 'root', // Usuario de la base de datos
  password: 'theluis', // Contraseña de la base de datos
  database: 'alcolemeter' // Nombre de la base de datos
});

// Ruta GET que devuelve datos de la tabla 'usuarios'
app.get('/usuarios', function (req, res) {
  // Conexión a la base de datos
  connection.getConnection(function (err, connection) {
    // Ejecución de la consulta MySQL (seleccionar todos los datos de la tabla 'usuarios')
    connection.query('SELECT * FROM usuarios', function (error, results, fields) {
      // Si ocurre algún error, lanzamos una excepción
      if (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
        return;
      }
      // Enviamos los resultados al cliente
      res.json(results);
    });
  });
});

// Iniciamos nuestro servidor
app.listen(3000, () => {
  console.log('El servidor está escuchando en http://localhost:3000');
});

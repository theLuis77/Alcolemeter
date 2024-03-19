// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'theluis',
    database: 'alcolemeter'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results, fields) => {
        if (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Error fetching users' });
            return;
        }
        res.json(results);
    });
});

app.post('/usuarios', (req, res) => {
    const { nombre, correo, contraseña, placa, tel, cel, ficha, carro, permiso } = req.body;
    const query = 'INSERT INTO usuarios (nombre, correo, contraseña, placa, tel, cel, ficha, carro, permiso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [nombre, correo, contraseña, placa, tel, cel, ficha, carro, permiso], (error, results, fields) => {
        if (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Error creating user' });
            return;
        }
        res.status(201).json({ message: 'User created successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cookieParser());

// Conexão com banco
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ecalfma',
    database: 'usuarios_db'
});
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.post('/login', (req, res) => {
    const { login, senha, lembrar } = req.body;
    db.query('SELECT * FROM usuarios WHERE login = ? AND senha = ?', [login, senha], (err, results) => {
        if (err) return res.status(500).send();
        if (results.length === 0) return res.status(401).send();

        res.cookie('user', login, {
            maxAge: lembrar ? 7 * 24 * 60 * 60 * 1000 : null,
            httpOnly: true
        });
        res.send();
    });
});

app.get('/usuarios', (req, res) => {
    if (!req.cookies.user) return res.status(401).send();

    db.query('SELECT nome, endereco, cpf FROM usuarios', (err, results) => {
        if (err) return res.status(500).send();
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
const http = require('http');
const express = require('express');
const fs = require('fs');

const aplicacao = express();

aplicacao.use(express.json());

aplicacao.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
aplicacao.get('/protocolosComunicacao', (req, res) => {
    fs.readFile('protocolosComunicacao.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo de protocolos de comunicação.');
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

const servidor = http.createServer(aplicacao);

const PORTA = 3001;
servidor.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
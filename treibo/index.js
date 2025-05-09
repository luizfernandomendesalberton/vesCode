const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/protocolosComunicacao", (req, res) => {
    const protocolos = [
        {
            nome: "HTTP",
            descricao: "Protocolo de comunicação para transferência de dados na web.",
            utilizacao: "Navegadores acessando páginas da web."
        },
        {
            nome: "FTP",
            descricao: "Protocolo de transferência de arquivos.",
            utilizacao: "Upload e download de arquivos em servidores remotos."
        }
    ];
    res.json(protocolos);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
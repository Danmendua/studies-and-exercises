const express = require('express');
const app = express();
app.use(express.json());

const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
];

const localizarPessoa = (req, res) => {
    const { nome } = req.query;
    if (!nome) {
        return res.send(convidados);
    } else {
        const pessoa = convidados.find((elemento) => {
            return elemento === nome
        });
        if (!pessoa) {
            return res.send({ mensagem: "O convidado buscado não está presente na lista." });
        } else {
            return res.send({ mensagem: "Convidado presente" });
        }
    }
};

const adicionarPessoa = (req, res) => {
    const { nome } = req.body;
    const pessoa = convidados.find((elemento) => {
        return elemento === nome
    });

    if (nome === pessoa) {
        return res.status(400).json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    } else {
        convidados.push(nome)
        return res.status(201).json({ mensagem: "Convidado adicionado." })
    }

};

const deletarPessoa = (req, res) => {
    const { nome } = req.params;
    const indice = convidados.indexOf(nome);
    if (indice !== -1) {
        convidados.splice(indice, 1)
        return res.status(201).json({ mensagem: "Convidado removido." });
    } else {
        return res.status(400).json({ mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }
};

app.get('/convidados', localizarPessoa);
app.post('/convidados', adicionarPessoa);
app.delete('/convidados/:nome', deletarPessoa);
app.listen(3000);
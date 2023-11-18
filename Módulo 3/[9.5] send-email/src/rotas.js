const express = require('express');
const sendMail = require('./controladores/login');

const rotas = express();

rotas.post('/send', sendMail)

module.exports = rotas
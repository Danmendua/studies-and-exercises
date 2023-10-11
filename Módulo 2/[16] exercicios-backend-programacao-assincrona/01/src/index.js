const express = require('express');
const app = express();
const rota = require('./roteador');

app.use(rota)
app.listen(3000)
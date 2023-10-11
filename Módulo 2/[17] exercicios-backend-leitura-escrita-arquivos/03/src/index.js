const express = require('express');
const app = express();
const rota = require('./rotas/rotas.js');

app.use(rota);
app.listen(3000);
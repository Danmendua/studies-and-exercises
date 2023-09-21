function tudo() {
    const express = require('express');
    app = express();
    const { get, getPorId } = require('./controladores/imoveis')

    app.get('/imoveis', get);
    app.get('/imoveis/:id', getPorId);
}
tudo();
module.exports = tudo
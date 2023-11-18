const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'SEU LOGIN',
    password: 'SUA SENHA',
    database: 'dindin'
})

module.exports = pool
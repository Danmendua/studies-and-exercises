const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'senha',
        database: 'market_cubos'
    }
});



module.exports = knex;
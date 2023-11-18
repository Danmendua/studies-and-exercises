require('dotenv').config()

const knex = require('knex')({
    client: process.env.KNEX_CLIENT,
    connection: {
        host: process.env.KNEX_HOST,
        user: process.env.KNEX_USER,
        password: process.env.KNEX_PASSW,
        database: process.env.KNEX_DATAB
    }
});

module.exports = knex;
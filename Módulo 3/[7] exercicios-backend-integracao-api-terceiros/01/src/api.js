const axios = require('axios');
const apiKey = require('./apiKey');
const apiUrl = `https://companyenrichment.abstractapi.com/v1`;

const instanciaAxios = axios.create({
    baseURL: apiUrl,
    params: {
        api_key: `${apiKey}`
    },
})

module.exports = instanciaAxios
const enderecos = [
    {
        rua: "Rua dos Artistas",
        cep: '00111222',

    },
    {
        cep: '00111333',
        rua: "Rua Augusta"
    },
    {
        cep: '00222444',
        rua: "Avenida Paralela"
    },
    {
        cep: '11222333',
        rua: "Rua Carlos Gomes"
    },
];

function localizador(cep) {
    enderecos.find(function (arrayDeCep) {
        if (arrayDeCep.cep === cep) {
            console.log(arrayDeCep.rua)
        }
    })
}

localizador("00222444")
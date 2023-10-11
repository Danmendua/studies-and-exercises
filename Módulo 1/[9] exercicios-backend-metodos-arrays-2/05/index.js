const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 60,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 18,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];


function fiscalizacao(pessoas) {
    const maiorIdade = pessoas.every(function checarIdade(array) {
        return array.idade > 17 && array.idade <= 65
    })

    const habilitado = pessoas.filter(function habilitado(array) {
        return array.habilitado
    })

    if (maiorIdade && habilitado) {
        console.log("todos passaram no teste")
    } else if (!maiorIdade) {
        console.log("Todos precisam ter mais de 18 anos")
    } else {
        console.log("Todos precisam estar habilitados")
    }

}

fiscalizacao(usuarios)

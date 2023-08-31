function faixaEtaria(idade) {
    if (idade < 25) {
        return "jovem";
    } else if (pessoa1.idade < 65) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}


function apresentar(pessoa) {
    const idade = faixaEtaria(pessoa.idade)
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria(pessoa)} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}


const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor",
    altura: 1.7
}

apresentar(pessoa1)
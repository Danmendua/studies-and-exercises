const numeros = [1, 98, -76, 0, 55, 12, 19, 5, 60, 44]

const maiorNumero = numeros.reduce(function (acumulador, elementoAtual) {
    if (elementoAtual > acumulador) {
        return elementoAtual
    } else {
        return acumulador
    }
},);

console.log(maiorNumero)
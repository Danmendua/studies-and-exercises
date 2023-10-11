const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro"
]

const maiorComprimento = cidades.reduce((acumulador, elementoAtual) => {
    if (elementoAtual.length > acumulador.length) {
        return elementoAtual
    } else {
        return acumulador
    }
}, "")

console.log(maiorComprimento)
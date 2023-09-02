const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
    "Extremoz",
    "Ilhéus",
    "Irecê",
    "Camaçari",
    "Simões Filho"
]

function salvarCidades(valores) {
    const cidadeGrande = valores.filter(function (cidadeAtual) {
        return cidadeAtual.length <= 8
    })
    console.log(cidadeGrande.join(", "))
}


salvarCidades(cidades)
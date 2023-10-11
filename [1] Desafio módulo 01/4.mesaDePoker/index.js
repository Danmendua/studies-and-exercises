function solucao(min, max, valores) {
    const podeEntrar = valores.filter(function (valorAtual) {
        return valorAtual >= min && valorAtual <= max
    })
    console.log(podeEntrar)
}
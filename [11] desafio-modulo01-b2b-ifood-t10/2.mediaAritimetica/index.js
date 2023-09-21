function solucao(lista) {

    const media = lista.reduce((acumulador, valorAtual, indice) => {
        return (acumulador + valorAtual)
    },) / lista.length

    console.log(media)

}
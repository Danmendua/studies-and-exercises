function solucao(lista) {

    const totalCofre = lista.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    })
    console.log(totalCofre)

}
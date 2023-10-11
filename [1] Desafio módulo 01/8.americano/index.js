function solucao(numeros) {

    const soma = numeros.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    })

    let contador = 1
    for (let i = 1; i < soma; i++) {
        if (contador < numeros.length) {
            contador++
        } else {
            contador = 1
        }
    }
    console.log(contador)

}
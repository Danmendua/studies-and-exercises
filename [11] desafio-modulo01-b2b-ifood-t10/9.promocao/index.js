function solucao(precos) {

    const precoMinimo = Math.min(...precos)
    const total = precos.reduce((acumulador, valorTotal) => acumulador + valorTotal)
    const desconto = precos.length > 2 ? precoMinimo / 2 : 0;
    const precoFinal = total - desconto;
    console.log(precoFinal);

}
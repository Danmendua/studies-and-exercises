function solucao(lista) {
    const filtro = lista.filter((elementoAtual) => elementoAtual >= 18);
    if (filtro.length > 0) {
        const menorIdade = Math.min(...filtro);
        console.log(menorIdade);
    } else {
        console.log("CRESCA E APARECA");
    }
}
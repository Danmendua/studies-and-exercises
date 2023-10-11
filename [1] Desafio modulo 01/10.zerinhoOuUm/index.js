function solucao(jogadores) {

    function zerinhoOuUm(jogadores) {
        let contadorZero = 0
        let contadorUm = 0
        let jogadorSorteado = null
        for (let each of jogadores) {
            if (each.jogada === 1) {
                contadorUm++
            } else {
                contadorZero++
            }
        }
        if (contadorUm === 1) {
            jogadorSorteado = jogadores.find((nome) => nome.jogada === 1);
        } else if (contadorZero === 1) {
            jogadorSorteado = jogadores.find((nome) => nome.jogada === 0);
        }
        return jogadorSorteado ? jogadorSorteado.nome : "NINGUEM";
    }

    console.log(zerinhoOuUm(jogadores))

}
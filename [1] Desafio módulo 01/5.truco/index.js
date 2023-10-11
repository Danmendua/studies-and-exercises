function solucao(carta) {
    function substituirCaractere(caractere) {
        const cadaCarta = {
            'Q': 'J',
            'J': 'K',
            'K': 'A',
            'A': '2',
            '2': '3',
            '3': 'Q'
        };

        return cadaCarta[caractere] || caractere;
    }

    console.log(substituirCaractere(carta));
}
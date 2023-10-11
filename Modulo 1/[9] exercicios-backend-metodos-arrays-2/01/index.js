const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";


function localizador(estante, nomeLivro) {
    const localizacao = estante.findIndex(function livro(nome) {
        return nome === nomeLivro
    })


    if (localizacao >= 0) {
        console.log("O livro está na posição", localizacao + 1)
    } else {
        console.log("Não achei o livro")
    }
}

localizador(livros, nomeDoLivro)
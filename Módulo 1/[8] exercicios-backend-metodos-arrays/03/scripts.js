const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function getCars(nome, posicao) {
    const ListaDeCarros = nome.slice(posicao, posicao + 3)
    console.log(ListaDeCarros.join(' - '))
}

getCars(nomes, posicao)
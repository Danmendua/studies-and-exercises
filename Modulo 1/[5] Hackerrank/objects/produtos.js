const produtos = [{
    nome: "banana",
    preco: 200,
    quantidade: 2
},
{
    nome: "batatadoce",
    preco: 100,
    quantidade: 2
},
{
    nome: "maça",
    preco: 100,
    quantidade: 1
}]

const carrinhoProdutos = {
    nome: "Malucão",
    idade: 20,
    produtos
};

let total = 0

for (valor of produtos) {
    total += valor.preco * valor.quantidade
} console.log(total)
const valorFormatado = (total / 100).toFixed(2);
console.log(`Olá, ${carrinhoProdutos.nome}, o total da compra ficou: R$${valorFormatado}`)

// console.log(`${ carrinhoProdutos.nome }, ${ carrinhoProdutos.idade } anos`);
// carrinhoProdutos.idade = 18
// console.log(`${ carrinhoProdutos.idade } anos`);
// console.log(carrinhoProdutos.produtos[0].nome);
// console.log(carrinhoProdutos.produtos[produtos.length - 1].preco);
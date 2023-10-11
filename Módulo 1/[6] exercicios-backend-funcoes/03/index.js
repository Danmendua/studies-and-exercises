const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        const { valorTotal, totalDeItens } = this.calcularTotal();
        const desconto = carrinho.calcularDesconto()
        console.log(`Cliente: ${carrinho.nomeDoCliente}\nTotal de itens: ${totalDeItens}\nTotal a pagar: R$${valorTotal.toFixed(2)}\nDesconto: R$${desconto.toFixed(2)}\nValor final: R$${valorTotal - desconto.toFixed(2)}`)

    },
    addProduto: function (produtos) {
        let checagem = false;
        for (itens of carrinho.produtos) {
            if (itens.id === produtos.id) {
                itens.qtd += produtos.qtd
                checagem = true
            }
        }
        if (!checagem) {
            carrinho.produtos.push(produtos)
        }
    },
    imprimirDetalhes: function () {
        let contador = 0;
        const { valorTotal, totalDeItens } = this.calcularTotal();
        const desconto = carrinho.calcularDesconto()
        console.log(`ClienTe: ${carrinho.nomeDoCliente}\n`)
        for (itens of carrinho.produtos) {
            contador++
            console.log(`Item ${contador} - ${itens.nome} - ${itens.qtd} - R$${(itens.qtd * itens.precoUnit / 100).toFixed(2)}`)
        }
        console.log(`\nTotal de itens: ${totalDeItens} itens\nTotal a pagar: R$ ${valorTotal.toFixed(2)}\nDesconto: R$${desconto.toFixed(2)}\nValor final: R$${valorTotal - desconto.toFixed(2)}`)
    },
    calcularTotal: function () {
        let valorTotal = 0
        let totalDeItens = 0;
        for (valores of this.produtos) {
            valorTotal += valores.precoUnit * valores.qtd / 100
            totalDeItens += valores.qtd
        }
        return { valorTotal, totalDeItens };
    },
    calcularDesconto: function () {
        const { valorTotal } = this.calcularTotal();
        let desconto1 = this.produtos[0].precoUnit
        let desconto2 = Math.floor(valorTotal * 0.1)
        for (produto of this.produtos) {
            if (produto.precoUnit <= desconto1) {
                desconto1 = produto.precoUnit / 100
            }
        }
        if (desconto1 > desconto2) {
            return desconto1;
        } else {
            return desconto2;
        }
    }
}


carrinho.addProduto(novoTenis);
// carrinho.addProduto(novaBermuda);
// carrinho.imprimirResumo();
carrinho.imprimirDetalhes();


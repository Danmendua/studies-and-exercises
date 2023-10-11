//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
const cred = (valorDoProduto - (valorDoProduto * 0.05)) * 0.01
const cheque = (valorDoProduto - (valorDoProduto * 0.03)) * 0.01
const debOuDin = (valorDoProduto - (valorDoProduto * 0.10)) * 0.01

if (tipoDePagamento === "credito") {
    console.log(cred.toLocaleString('pt-BR')) //
} else if (tipoDePagamento === "cheque") {
    console.log(cheque.toLocaleString('pt-BR'))
} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    console.log(debOuDin.toLocaleString('pt-BR'))
} else {
    console.log("Forma de pagamento invalida")
}
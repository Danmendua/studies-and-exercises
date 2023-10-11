//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
const centParaReal = valorDoProduto * 0.01
const conversor = (centParaReal / quantidadeDoParcelamento)
const pago = valorPago / conversor

console.log(`Restam ${quantidadeDoParcelamento - pago} parcelas de R$ ${conversor}`);
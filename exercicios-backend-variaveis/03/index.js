const precoTenis = 129.99;
const orcamentoMaximo = 80.00;

const porcentagemDesconto = ((precoTenis - orcamentoMaximo) / precoTenis) * 100;

console.log(`Você precisa de um desconto de ${porcentagemDesconto.toFixed(2)}% para comprar o tênis.`);
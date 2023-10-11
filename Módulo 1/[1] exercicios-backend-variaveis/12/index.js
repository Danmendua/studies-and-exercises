const M = 90000, C = 60000, n = 24
const j = Math.pow(M / C, 1 / n) - 1;
const p = j * 100
console.log(`O seu financiamento de R$ ${C.toLocaleString('pt-BR')} teve uma taxa de juros de ${j.toFixed(3)} (ou de ${p.toFixed(1)}%), pois após ${n} meses você teve que pagar R$ ${M.toLocaleString('pt-BR')}`)
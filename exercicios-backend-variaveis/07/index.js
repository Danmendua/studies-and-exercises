// po = população
// i = infectados
// d = dias
const po = 100, i = 4, d = 7;
const soma = po * Math.pow(i, d / 7).toFixed(3);
console.log(`1 pessoa podendo infectar ${i} pessoas a cada ${d} dias, ao total de ${po} dias, serão ${soma} infectados.`);

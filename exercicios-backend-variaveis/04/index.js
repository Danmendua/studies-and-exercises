const C = 1000 // C = valor investido

const i = 12.5 // I = taxa fixa de juros
const TD = i / 100 // taxa dividida em decimais

const T = 6// T = tempo investido em meses

const M = C * Math.pow(1 + TD, T); // M = renda final

console.log(`Aplicando ${C}, durante ${T} meses, no sistema de juros compostos sob uma taxa mensal fixa de ${i}%, o montante será: ${M.toFixed(3)}`); 
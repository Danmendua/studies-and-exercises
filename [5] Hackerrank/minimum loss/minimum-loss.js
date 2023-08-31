const precos = [30, 10, 54, 76, 5, 35];
let perdaMinima = Infinity;

for (let a = 0; a < precos.length; a++) {
    for (let b = a + 1; b < precos.length; b++) {
        if (precos[a] > precos[b] && precos[a] - precos[b] < perdaMinima) {
            perdaMinima = precos[a] - precos[b];
        }
    }
}

console.log(perdaMinima);
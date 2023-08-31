const precos = [70, 70, 50, 50, 60, 20, 40, 0]
let menor = precos[0]
let total = 0

for (valor of precos) {
    total += valor
    if (valor <= menor) {
        menor = valor
    }
} if (precos.length >= 5) {
    console.log(total - menor);
} else {
    console.log(total);
}
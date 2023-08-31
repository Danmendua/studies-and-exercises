const notas = [100, 100, 100, 50, 100, 50];
let maior = notas[0]
let menor = notas[0]
let total = 0

for (valores of notas) {
    total += valores
    if (valores > maior) {
        maior = valores
    } else if (valores < menor) {
        menor = valores
    }
} console.log((total - (menor + maior)) / (notas.length - 2))
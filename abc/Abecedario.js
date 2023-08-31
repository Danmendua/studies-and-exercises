const letra = "l"
const palavras = ["maça", "mamao", "melao", "melancia", "laranja", "banana"];
let contador = 0

for (palavra of palavras) {
    if (palavra[0] != letra) {
        contador++
    }
} console.log(contador)


// for (inicial of palavras) {
//     if (!inicial.startsWith(letra)) {
//         contador++
//     }
// } console.log(contador)
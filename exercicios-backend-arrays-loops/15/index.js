const original = [1, 10, 2, 3, 13, 6, 7, 8, 9];
const pares = [];
const impares = [];

for (numeros of original) {
    if (numeros % 2 === 0) {
        pares.push(numeros)
    } else {
        impares.push(numeros)
    }
}
console.log(pares)
console.log(impares)


// let contador = 0
// while (contador < original.length) {
//     if (original[contador] % 2 === 0) {
//         pares.push(original[contador])
//     } else {
//         impares.push(original[contador])
//     } contador++
// }
// console.log(pares)
// console.log(impares)


// for (contadorzim = 0; contadorzim < original.length; contadorzim++) {
//     if (original[contadorzim] % 2 === 0) {
//         pares.push(original[contadorzim])
//     } else {
//         impares.push(original[contadorzim])
//     }
// }
// console.log(pares)
// console.log(impares)
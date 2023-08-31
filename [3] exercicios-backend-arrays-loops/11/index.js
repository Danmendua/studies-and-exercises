const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
const array = [];

// for (let i = 0; i < original.length; i++) {
//     if (original[i] >= 10 && original[i] <= 20 || original[i] >= 100) {
//         array.push(original[i]);
//     }
// } console.log(array);

for (let numero of original) {
    if (numero >= 10 && numero <= 20 || numero > 100) {
        array.push(numero);
    }
} console.log(array);
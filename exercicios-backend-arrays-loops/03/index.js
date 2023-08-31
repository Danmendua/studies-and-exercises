const numeros = [54, 22, 14, 284, 2, 3, 5, 6, 7, 10];
let tem10 = 0
let detectar10 = 0

for (let tem10 = 0; tem10 < numeros.length; tem10++) {
    if (numeros[tem10] == 10) {
        detectar10++
        console.log(tem10);
    }
} if (detectar10 == 0) {
    console.log("-1")
}

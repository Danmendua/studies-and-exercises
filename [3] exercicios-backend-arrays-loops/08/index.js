const numeros = [3, 4, 1, 8, 11, 7, 5];
let maiorNumero = 0

for (let numero = 0; numero < numeros.length; numero++) {
    if (numeros[numero] > maiorNumero) {
        maiorNumero = numeros[numero];
    }
} console.log(maiorNumero)
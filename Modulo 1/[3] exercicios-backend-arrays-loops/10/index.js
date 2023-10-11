const numeros = [8, 11, 4, 1];
let maiorNumero = 0
let menorNumero = numeros[0]

for (let numero = 0; numero < numeros.length; numero++) {
    if (numeros[numero] > maiorNumero) {
        maiorNumero = numeros[numero];
    } else if (numeros[numero] < menorNumero) {
        menorNumero = numeros[numero];
    }
} console.log(maiorNumero - menorNumero)
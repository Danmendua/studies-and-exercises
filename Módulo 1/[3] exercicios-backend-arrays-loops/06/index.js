const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let ePar = 0

for (let contador = 0; contador < numeros.length; contador++) {
    if (numeros[contador] % 2 === 0) {
        ePar += numeros[contador]
    }
} console.log(ePar)
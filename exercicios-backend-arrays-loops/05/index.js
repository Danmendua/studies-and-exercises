const original = [1, 4, 12, 21, 53, 88, 112];
let ePar = 0

for (let contador = 0; contador < original.length; contador++) {
    if (original[contador] % 2 === 0) {
        ePar = original[contador]
        console.log(ePar)
    }
}
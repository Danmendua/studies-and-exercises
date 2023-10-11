const disjuntores = [false, true, true, true, false, true, false, false];

let contador = 0

for (desligado of disjuntores) {
    if (desligado) {
        console.log(contador)
    } contador++
}
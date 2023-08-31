const letras = ["A", "e", "B", "C", "E", "z"];
let contador = 0
const upper = "E"
const lower = "e"

for (letra of letras) {
    if (letra == upper) {
        contador++
    } else if (letra == lower) {
        contador++
    }
} if (contador == 0) {
    console.log(`Nenhuma letra "${upper}" ou "${lower}" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${contador} letras "${upper}" ou "${lower}".`)
}
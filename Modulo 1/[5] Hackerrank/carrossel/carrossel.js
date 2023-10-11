const sequencia = [">", ">", ">", ">", ">", ">", ">", ">", ">"]
let contador = 0


for (lado of sequencia) {
    if (lado == ">") {
        contador++
    } else {
        contador--
    }

    if (contador > 6) {
        contador = 0
    } else if (contador < 0) {
        contador = 6
    }
} console.log(contador)
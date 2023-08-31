const caracteres = /[!@#$%&*().]/;
let limpo = []

for (caractere of stringCorrompida) {
    if (!caracteres.test(caractere)) {
        limpo.push(caractere)
    }
} console.log(limpo.join(''))
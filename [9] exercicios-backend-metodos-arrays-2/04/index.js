const numeros = [0, 122, 4, 6, 7, 8, 44]


function imparOuPar(numeros) {
    const verificador = numeros.every(function (forPar) {
        return forPar % 2 === 0
    })

    if (verificador) {
        console.log("Array válido :)")
    } else {
        console.log("Array inválido :(")
    }
}

imparOuPar(numeros)





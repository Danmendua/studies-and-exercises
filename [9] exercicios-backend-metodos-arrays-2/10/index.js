const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]


const positivos = numeros.filter((elementoAtual) => {
    return elementoAtual % 2 === 0
})
console.log(positivos)
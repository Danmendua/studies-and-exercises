const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function reverterArray(arr) {
    const arrRevertido = arr.reverse();
    const frutasFormatadas = arrRevertido.join(", ")
    return frutasFormatadas;
}

function removerEAdicionar(arr) {
    arr.shift();
    arr.pop();
    arr.push("Melão");
    return arr;
}

console.log(removerEAdicionar(frutas))

console.log(reverterArray(frutas))

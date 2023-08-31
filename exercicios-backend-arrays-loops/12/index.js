const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


for (nome of filaDeDentro) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora.shift());
    }
}

console.log(filaDeDentro)
console.log(filaDeFora)
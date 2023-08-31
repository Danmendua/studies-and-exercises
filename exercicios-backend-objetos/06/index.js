const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = []
const adultos = []

for (people of usuarios) {
    if (people.idade < 18) {
        jovens.push(people)
    } else {
        adultos.push(people)
    }
}

console.log(jovens)
console.log(adultos)
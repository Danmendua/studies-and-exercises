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


for (people of usuarios) {
    if (people.idade >= 18) {
        people.maior_idade = true;
    } else {
        people.maior_idade = false;
    }
}

console.log(usuarios)
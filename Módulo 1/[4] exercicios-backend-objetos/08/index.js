const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (pessoa of usuarios) {
    if (pessoa.pets.length === 1) {
        console.log(`Sou a ${pessoa.nome} e tenho ${pessoa.pets.length} pet`) // singular
    } else if (pessoa.pets.length > 1) {
        console.log(`Sou a ${pessoa.nome} e tenho ${pessoa.pets.length} pets`) // plural
    } else {
        console.log(`Sou a ${pessoa.nome} e não tenho pets.`)
    }
}
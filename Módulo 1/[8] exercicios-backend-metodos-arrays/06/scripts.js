const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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


function encontrarTutor(tutores, amigo) {
    let encontrou = false;
    for (let each of tutores) {
        if (each.pets.includes(amigo)) {
            encontrou = true
            console.log(`O(a) tutor(a) do(a) ${amigo} é o(a) ${each.nome}`)
            break;
        }
    }
    if (!encontrou) {
        console.log(`Que pena ${amigo}, não encontramos seu(ua) tutor(a).`)
    }
}

encontrarTutor(usuarios, "Salsicha")
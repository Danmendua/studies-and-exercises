const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const devAdulto = pessoas.filter((filtro) => {
    return filtro.profissao === "Programador" && filtro.idade > 20
})
// console.log(devAdulto);

const jornAdulto = pessoas.filter((filtro) => {
    return filtro.profissao === "Jornalista" && filtro.idade > 30
})
// console.log(jornAdulto)

const tudoJunto = pessoas.filter((idade) => {
    return (idade.profissao === "Jornalista" || idade.profissao === "Programador") && idade.idade <= 29
})
console.log(tudoJunto)

// const tudoJunto = devAdulto.concat(jornAdulto).filter((idades) => {
//     return idades.idade <= 29
// })

// console.log(tudoJunto) // aqui eu procurei dentro dos que já estavam no filtro, se cada um teria até 29 anos.
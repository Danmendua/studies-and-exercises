const nomes = [
    "Maria",
    "João",
    "alice",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
    "Alice"
];


const filtro = nomes.filter((nomeAtual) => {
    return nomeAtual[0].toLowerCase() === "a"
})
console.log(filtro)
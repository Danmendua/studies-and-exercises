const nomes = ["Ana", "Joana", "Carlos", "amanda", "Alice"];

const comecaComA = []

for (let nome of nomes) {
    const inicial = nome[0]
    if (inicial === "A" || inicial === "a") {
        comecaComA.push(nome)
    }
} console.log(comecaComA)

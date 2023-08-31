const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

const perdido = "Carlos"


let contador = 0

for (nomes of participantes) {
    contador++
    if (nomes.nome === perdido) {
        console.log(`Galera... O ${perdido} está na posição ${contador}, corre lá!`)
    }
}


// for (let i = 0; i < participantes.length; i++) {
//     if (participantes[i].nome == perdido) {
//         console.log(`O ${perdido} está na posição: ${i + 1}, corre lá`)
//     }
// }
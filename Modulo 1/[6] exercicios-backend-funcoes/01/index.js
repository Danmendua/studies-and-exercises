function corrigirProva() {
    let totalDeAcertos = 0
    let nota = 0
    for (resultado of prova.questoes) {
        if (resultado.correta === resultado.resposta) {
            totalDeAcertos++
            nota = totalDeAcertos * 2
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${totalDeAcertos} questões e obteve nota ${nota}`)
}


const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "e"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

corrigirProva(prova)
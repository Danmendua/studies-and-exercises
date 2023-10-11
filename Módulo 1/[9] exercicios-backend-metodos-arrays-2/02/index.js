const palavras = ["livro", "alice", "sol", "carro", "orelha"]


function verificador(caracteres) {
    const verificarLimite = caracteres.some(function (palavra) {
        return palavra.length > 5
    })
    if (verificarLimite) {
        console.log("Existe palavra inválida")
    } else {
        console.log("Não existe palavra inválida")
    }
}

verificador(palavras)
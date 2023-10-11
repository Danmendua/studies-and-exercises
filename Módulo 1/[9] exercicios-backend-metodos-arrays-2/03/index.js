const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"]

function verificador(bebida) {
    const verificarLimite = bebida.some(function (palavra) {
        if (palavra === "cerveja" || palavra === "vodka") {
            return palavra
        }
    })

    if (verificarLimite) {
        console.log("Revise sua lista, João. Possui bebida com venda proibida!")
    } else {
        console.log("Tudo certo, vamos as compras!")
    }
}

verificador(palavras)
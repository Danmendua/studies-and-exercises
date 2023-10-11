function verificador(original, caractereProibido1, caractereProibido2) {
    if (original.toLowerCase().includes(caractereProibido1) || original.toLowerCase().includes(caractereProibido2)) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado.");
    }
    return original
}

const comentario = ("Esse cOViD é muito perigoso!");

verificador(comentario, "pandemia", "covid")
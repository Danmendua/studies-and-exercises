let identificador = "123";
let nome = "José silva costa nunes pereira dantas de oliveira jr";
let email = "      jose@email.com  ";

function formatoIdentificador(idnt) {
    const identificadorFormatado = idnt.padStart(6, "000")
    return identificadorFormatado
}

function formatadoNome(nome) {
    let nomeCompleto = ""
    for (let each of nome.split(" ")) {
        nomeCompleto += each[0].toUpperCase() + each.slice(1) + " "
    }
    return nomeCompleto
}

function formatadoEmail() {
    return email.trim();
}

console.log(formatoIdentificador(identificador))
console.log(formatadoNome(nome));
console.log(formatadoEmail(email))


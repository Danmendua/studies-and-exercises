const nome = 'Daniel Mendes Duarte';


function socialMedia(nome) {
    let nomeFormatado = nome.toLowerCase()
    while (nomeFormatado !== nomeFormatado.replace(" ", "")) {
        nomeFormatado = nomeFormatado.replace(" ", "")
    }
    nomeFormatado = "@" + nomeFormatado.slice(0, 12) // entendi que são 13 caracteres JUNTO com o "@", já que "guidocerquei" só tem 12, +1 com o "@".
    return nomeFormatado;
}

console.log(socialMedia(nome))
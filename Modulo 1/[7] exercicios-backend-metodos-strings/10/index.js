const nomeArquivo = 'Foto da Familia.pdf';

function checagemDeArquivo(nomeArquivo) {
    const pontoDoArquivo = nomeArquivo.indexOf(".") + 1;
    const formato = nomeArquivo.slice(pontoDoArquivo).toLowerCase();
    if (formato.match(/^(jpg|jpeg|gif|png)$/)) {
        return "Arquivo válido";
    } else {
        return "Arquivo inválido";
    }
    // if (formato === "jpg" || formato === "jpeg" || formato === "gif" || formato === "png") {
    //     return "Arquivo válido"
    // } else {
    //     return "Arquivo inválido"
    // }
}

console.log(checagemDeArquivo(nomeArquivo));
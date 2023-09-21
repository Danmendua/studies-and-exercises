function processData(input) {

    const linhas = input.trim().split("\n");
    const senha1 = linhas[0];
    const senha2 = linhas[1];
    let indiceSenha2 = 0

    let senhaDigitada = [];
    for (let i = 0; i < senha1.length; i++) {
        for (let j = indiceSenha2; j < senha2.length; j++) {
            if (senha1[i] === senha2[j]) {
                senhaDigitada.push(senha2[j])
                indiceSenha2 = j + 1
                break;
            }
        }
    }
    const senhaFormatada1 = senhaDigitada.join('');
    if (senhaFormatada1 === senha1) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }

} 
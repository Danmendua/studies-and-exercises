function processData(input) {

    const inputFormatado = input.trim()
    function corrigirCapsLock(palavra) {
        if (/^[a-z][A-Z]*$/.test(palavra)) {
            return palavra[0].toUpperCase() + palavra.slice(1).toLowerCase();
        } else if (/^[A-Z]+$/.test(palavra)) {
            return palavra.toLowerCase();
        } else {
            return palavra;
        }
    }
    console.log(corrigirCapsLock(inputFormatado));

}

// ## pensei que poderia ser uma variavel "string" mas com uma frase inteira e não somente 1 palavra:

// const input = "vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO."
// const arrayInput = input.split(" ");
// const arrayFormatado = []
// for (let each of arrayInput) {
//     if (each[0] === each[0].toLowerCase() && each.slice(1) === each.slice(1).toUpperCase()) {
//         arrayFormatado.push(each[0].toUpperCase() + each.slice(1).toLowerCase());
//     } else if (each[0] === each[0].toLowerCase() && each.slice(1) === each.slice(1).toLowerCase()) {
//         arrayFormatado.push(each.toLowerCase())
//     } else if (each.toUpperCase()) {
//         arrayFormatado.push(each.toLowerCase())
//     }
// }
// const resultadoFinal = arrayFormatado.join(' ')
// console.log(resultadoFinal.trim());


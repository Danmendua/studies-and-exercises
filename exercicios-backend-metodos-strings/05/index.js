const numeroCartao = '1111222233334444';

function formatarCartao(cartao) {
    if (cartao.length === 16) {
        let cartaoFormatado = cartao.slice(0, 4) + "********" + cartao.slice(-4)
        return cartaoFormatado;
    } else {
        return "Cartão inválido."
    }
}

console.log(formatarCartao(numeroCartao));

// if (cartao.length === 16) {
//     let cartaoFormatado = cartao.slice(0, 4) + "********" + cartao.slice(-4)
//     console.log(cartaoFormatado);
// } else {
//     console.log("Cartão inválido.");
// }
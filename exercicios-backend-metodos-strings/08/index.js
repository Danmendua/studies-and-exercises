const cpf = "011.022.033-44";
const cnpj = "94.176.053/0001-01"

function cleanAll(charactere) {
    let limpo = ""
    for (let each of charactere) {
        if (!each.match(/[.,-/]/)) {
            limpo += each
        }
    }
    return limpo
}

console.log(cleanAll(cpf))
console.log(cleanAll(cnpj))

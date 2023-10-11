function formatarCPF(cpf) {
    if (cpf.length === 11) {
        let cpfFormatado = ""
        cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        // cpfFormatado += cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(-2);
        return cpfFormatado;
    } else {
        return "CPF inválido";
    }
}

function formatarCNPJ(cnpj) {
    if (cnpj.length === 14) {
        let cnpjFormatado = ""
        cnpjFormatado = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4-');
        // cnpjFormatado += cnpj.slice(0, 2) + "." + cnpj.slice(2, 5) + "." + cnpj.slice(5, 8) + "/" + cnpj.slice(-6, -2) + "-" + cnpj.slice(12);
        return cnpjFormatado;
    } else {
        return "CNPJ inválido";
    }
}

const cpf = "12345678900";
const cnpj = "12345678000199";

console.log(formatarCPF(cpf))
console.log(formatarCNPJ(cnpj))
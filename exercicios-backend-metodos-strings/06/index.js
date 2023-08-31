const celular = 81000000000;

function formatarCelular(celular) {
    let cel = `${celular}`
    let celFormatado = ""
    if ((cel.length === 11)) {
        celFormatado = `(${cel.slice(0, 2)}) 9 ${cel.slice(3, 7)}-${cel.slice(7)}`
        return celFormatado;
    } else if (cel.length === 10) {
        celFormatado = `(${cel.slice(0, 2)}) 9 ${cel.slice(2, 6)}-${cel.slice(6)}`
        return celFormatado;
    } else if (cel.length === 9) {
        celFormatado = `${cel.slice(0, 1)} ${cel.slice(1, 5)}-${cel.slice(5)}`
        return celFormatado;
    } else if (cel.length === 8) {
        celFormatado = `9 ${cel.slice(0, 4)}-${cel.slice(5)}`
        return celFormatado;
    } else {
        return 'Numero inválido';
    }
}


console.log(formatarCelular(celular));
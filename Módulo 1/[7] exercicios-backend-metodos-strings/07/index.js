const email = "daniel.-mendes@hotmail.com";

// const temArroba = email.includes("@");
// const temPonto = email.includes(".");
// const pontoComeco = email[0].includes("."), pontoFinal = email.lastIndexOf(".");
// let aprovado = false;

// if (temPonto && temArroba) {
//     if (pontoComeco === true || pontoFinal === email.length - 1) {
//         aprovado = false
//     } else {
//         aprovado = true
//     }
// }

// if (aprovado) {
//     console.log("E-mail válido");
// } else {
//     console.log("E-mail inválido");
// }

function validandoEmail(email) {
    const temArroba = email.includes("@");
    const temPonto = email.includes(".");
    const pontoComeco = email[0].includes("."), pontoFinal = email.lastIndexOf(".");
    let aprovado = false;

    if (temPonto && temArroba) {
        if (pontoComeco === true || pontoFinal === email.length - 1) {
            aprovado = false
        } else {
            aprovado = true
        }
    }

    if (aprovado) {
        return "E-mail válido";
    } else {
        return "E-mail inválido";
    }
}

console.log(validandoEmail(email));
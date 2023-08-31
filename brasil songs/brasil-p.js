const primeiraLetra = "a"
const segundaLetra = "v"
const palavras = ["aveia", "manha", "ave", "maca", "coco", "avenida",];
let aprovado = [];

for (nome of palavras) {
    if (nome[0] == primeiraLetra && nome[1] == segundaLetra) {
        aprovado.push(nome);
        console.log(nome)
    }
} if (aprovado.length == 0) {
    console.log("NENHUMA")
}


// for (nome of palavras) {
//     if (nome[0] == primeiraLetra && nome[1] == segundaLetra) {
//         aprovado.push(nome);
//         console.log(nome)
//     }
// } if (aprovado.length == 0) {
//     console.log("NENHUMA")
// } else {
//     console.log(aprovado)
// }
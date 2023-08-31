const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho.push(
    { item: tv, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: webcam, quantidade: 1 }
);
carlos.carrinho.push(
    { item: notebook, quantidade: 2 }
);
patricia.carrinho.push(
    { item: teclado, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: carregador, quantidade: 1 },
    { item: mouse, quantidade: 1 },
    { item: monitor, quantidade: 1 }
);
renato.carrinho.push(
    { tem: webcam, quantidade: 5 }
);
roberto.carrinho.push({ item: webcam, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: monitor, quantidade: 1 }
);


console.log(`O carrinho de ${jose.nome}:`, jose.carrinho);
console.log(`O carrinho de ${jose.nome}:`, carlos.carrinho);
console.log(`O carrinho de ${jose.nome}:`, patricia.carrinho);
console.log(`O carrinho de ${jose.nome}:`, renato.carrinho);
console.log(`O carrinho de ${jose.nome}:`, roberto.carrinho);


// const produtos = {
//     tv: { nome: "TV Samsung 4K", valorEmCentavos: 129900 },
//     notebook: { nome: "Notebook Dell", valorEmCentavos: 399990 },
//     mouse: { nome: "Mouse MX Master 3", valorEmCentavos: 23000 },
//     teclado: { nome: "Teclado Keychron K8", valorEmCentavos: 50000 },
//     caboUsb: { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 },
//     carregador: { nome: "Carregador portátil", valorEmCentavos: 4590 },
//     webcam: { nome: "Webcam C920s", valorEmCentavos: 80000 },
//     monitor: { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 },
// };


// const clientes = [
//     {
//         nome: "José", carrinho: [
//             { item: produtos.tv, quantidade: 1 },
//             { item: produtos.caboUsb, quantidade: 2 },
//             { item: produtos.webcam, quantidade: 1 }
//         ]
//     },
//     {
//         nome: "Carlos", carrinho: [
//             { item: produtos.notebook, quantidade: 2 }
//         ]
//     },
//     {
//         nome: "Patricia", carrinho: [
//             { item: produtos.teclado, quantidade: 1 },
//             { item: produtos.caboUsb, quantidade: 2 },
//             { item: produtos.carregador, quantidade: 1 },
//             { item: produtos.mouse, quantidade: 1 },
//             { item: produtos.monitor, quantidade: 1 }
//         ]
//     },
//     {
//         nome: "Renato", carrinho: [
//             { item: produtos.webcam, quantidade: 5 }
//         ]
//     },
//     {
//         nome: "Roberto", carrinho: [
//             { item: produtos.webcam, quantidade: 1 },
//             { item: produtos.caboUsb, quantidade: 2 },
//             { item: produtos.monitor, quantidade: 1 }
//         ]
//     }
// ];


// for (cada of clientes) {
//     console.log(cada.nome, cada.carrinho)
// }

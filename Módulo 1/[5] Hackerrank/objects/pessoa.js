const pessoa = {
    nome: "Malucão",
    idade: 15,
    altura: 1.78,
    temCNH: true,
    apelidos: ["doido", "não deveria dirigir"],
};


const textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e possui os seguintes apelidos:`)
for (apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}
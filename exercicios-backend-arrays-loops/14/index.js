const arrayA = [1, 3, 3, 44, 11, 23];
const arrayB = [57, 4, 21, 32, 13, 44];
let menor = []
let maior = []
const comparacao = []
let quantidadeArray = 0

quantidadeArray = arrayA.length

for (let i = 0; i < quantidadeArray; i++) {
    menor = arrayA.shift()
    maior = arrayB.shift()
    if (menor < maior) {
        comparacao.push(menor)
    } else {
        comparacao.push(maior)
    }
} console.log(comparacao)
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const crescente = numeros.sort((a, b) => { return a - b; });
console.log(crescente) // questão "a"

const decrescente = numeros.sort((a, b) => { return b - a; });
console.log(decrescente) // questão "b"

const unicode = numeros.sort();
console.log(unicode) // questão "c"

const frutasCrescente = frutas.sort((a, b) => { return a.localeCompare(b); });
console.log(frutasCrescente) // questão "d"

const frutasDecrescente = frutas.sort((a, b) => { return b.localeCompare(a); });
console.log(frutasDecrescente) // questão "e"

const frutasLength = frutas.sort((a, b) => { return a.length - b.length; });
console.log(frutasLength);

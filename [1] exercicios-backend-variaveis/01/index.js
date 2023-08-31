const Peso = 150;
const Altura = 1.79
const IMC = (Peso / Altura ** 2).toFixed(3);

if (IMC < 17) {
    console.log(`Seu IMC é de ${IMC} e você está muito abaixo do peso.`);
} else if (IMC >= 17 && IMC <= 18.49) {
    console.log(`Seu IMC é de ${IMC} e você está abaixo do peso.`);
} else if (IMC >= 18.5 && IMC <= 24.99) {
    console.log(`Seu IMC é de ${IMC} e você está com peso normal.`);
} else if (IMC >= 25 && IMC <= 29.99) {
    console.log(`Seu IMC é de ${IMC} e você está com sobrepeso.`);
} else if (IMC >= 30 && IMC <= 34.99) {
    console.log(`Seu IMC é de ${IMC} e você está em grau de obesidade I`);
} else if (IMC >= 35 && IMC <= 39.99) {
    console.log(`Seu IMC é de ${IMC} e você está em grau de obesidade severa (obesidade II).`);
} else if (IMC >= 40) {
    console.log(`Seu IMC é de ${IMC} e você está em grau de obesidade mórbida (Obesidade III).`);
}
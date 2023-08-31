//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

const desconto = (rendaMensalEmCentavos * 18 / 100)
let totalParaPagar = totalJaPagoPeloAluno
let contador = 0
let contadorMeses = mesesDecorridos
let contador2 = 0

if (mesesDecorridos >= 60) {
    console.log("Já se passaram mais de 60 meses, você não deve nada.");
} else if (rendaMensalEmCentavos >= 200000 && mesesDecorridos < 60 && totalJaPagoPeloAluno < 1800000) {
    while (totalParaPagar < 1800000) {
        contador += 1
        totalParaPagar += desconto
    } while (contadorMeses < 60) {
        contadorMeses += 1
        contador2 += 1
    } if (contador + contador2 > 60 || contador2 > contador) {
        contador2 = contador
    }
    console.log(`O valor da parcela desse mês é R$ ${desconto * 0.01} reais, faltando ${contador} parcelas (${contador2}, pois você tem até 60 meses)`);
} else if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("Valor total já pago");
}
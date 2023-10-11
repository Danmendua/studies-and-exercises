//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 18;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

// ser maior de idade ele pode
//se não for, acompanhado de um responsavel

if (idadeDoAluno < 18 && !possuiResponsavel) {
    console.log("Não é possível fazer a rematrícula");
} else {
    console.log("Rematrícula realizada com sucesso");
}
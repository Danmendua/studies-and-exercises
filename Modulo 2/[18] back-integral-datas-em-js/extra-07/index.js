const { isBefore, differenceInMinutes, differenceInSeconds } = require('date-fns');

const checarPromocao = (data) => {
    const diaPromocao = new Date(2023, 3, 1, 1, 0); // data da promoção
    if (isBefore(data, diaPromocao)) {
        return false;
    } else {
        const diferencaEmSegundos = differenceInSeconds(data, diaPromocao);
        return diferencaEmSegundos <= 2592000; // quantos segundos tem em 30 dias
    }
}

console.log(checarPromocao(new Date(2023, 4, 1, 1, 1))); // false (1 mês e 1 segundo)
console.log(checarPromocao(new Date(2023, 2, 1, 1, 0))); // false (antes da promoção)
console.log(checarPromocao(new Date(2023, 4, 1, 1, 0))); // true (1 mês certinho)
console.log(checarPromocao(new Date(2023, 3, 1, 1, 0))); // true (inicio da promoção)

// pode colocar qualquer data, em qualquer formato.
const { isBefore, differenceInSeconds } = require('date-fns');

const checarPromocao = (data) => {
    const diaPromocao = new Date(2023, 9, 27, 12, 5); // data da promoção
    if (isBefore(data, diaPromocao)) {
        return false;
    } else {
        const diferencaEmSegundos = differenceInSeconds(data, diaPromocao);
        return diferencaEmSegundos <= 86400;  // quantos segundos tem 1 dia
    }
}

console.log(checarPromocao(new Date(2023, 9, 28, 12, 5))); // true
console.log(checarPromocao(new Date(2023, 9, 26, 12, 5))); // false
// pode colocar qualquer data, em qualquer formato.
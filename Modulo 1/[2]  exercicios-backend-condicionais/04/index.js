const ladoA = 3;
const ladoB = 3;


if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log("bucha de branco");
    } else if (ladoA === 1) {
        console.log("bucha de ás");
    } else if (ladoA === 2) {
        console.log("bucha de duque");
    } else if (ladoA === 3) {
        console.log("bucha de terno");
    } else if (ladoA === 4) {
        console.log("bucha de quadra");
    } else if (ladoA === 5) {
        console.log("bucha de quina");
    } else if (ladoA === 6) {
        console.log("bucha de sena");
    }
} else {
    console.log("não é uma bucha");
}
const taAberto = (horas) => {
    const valorDasHoras = horas.getHours();
    const valorDosMinutos = horas.getMinutes();
    if (valorDasHoras === 18 && valorDosMinutos > 0) {
        return false;
    }
    return valorDasHoras >= 8 && valorDasHoras <= 18;
}

console.log(taAberto(new Date(2015, 1, 1, 8, 1)));
console.log(taAberto(new Date(2015, 1, 1, 2)));
console.log(taAberto(new Date(2015, 1, 1, 18, 1)));
console.log(taAberto(new Date(2015, 1, 1, 18)));




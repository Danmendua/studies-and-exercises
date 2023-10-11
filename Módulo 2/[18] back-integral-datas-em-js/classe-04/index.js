const taAberto = (horas) => {
    const valorDasHoras = horas.getHours();
    const valorDosMinutos = horas.getMinutes();
    const dia = horas.getDay();
    if (valorDasHoras === 18 && valorDosMinutos > 0) {
        return false;
    } else if (dia === 6 || dia === 0) {
        return false;
    }
    return valorDasHoras >= 8 && valorDasHoras <= 18;
}


console.log(taAberto(new Date(2021, 3, 25, 12))); // deve retornar false, pois é um domingo
console.log(taAberto(new Date(2021, 3, 26, 18))); // deve retornar true, pois é uma segunda
console.log(taAberto(new Date(2021, 3, 26, 7, 59))); // deve retornar false, pois é muito cedo (7h59)
function solucao(min, km) {

    let valorEmMin = 0
    let valorEmKm = 0

    if (min <= 20) {
        valorEmMin = min * 50
    } else {
        let valorCortadoMin = min - 20
        valorEmMin = (20 * 50) + (valorCortadoMin * 30)
    }

    if (km <= 10) {
        valorEmKm = km * 70
    } else {
        let valorCortadoKm = km - 10
        valorEmKm = (10 * 70) + (valorCortadoKm * 50)
    }

    let valorTotal = valorEmMin + valorEmKm
    console.log(Math.floor(valorTotal))

}
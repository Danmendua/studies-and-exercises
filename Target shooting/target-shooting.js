const disparos = [0, 71, 71, 50, 5, 6, 71];
let total = []

for (pontuacao of disparos) {
    if (pontuacao > 70) {
        total.push(pontuacao)
    }
} if (total.length > 3) {
    console.log(total.length)
} else {
    console.log("ELIMINADO")
}
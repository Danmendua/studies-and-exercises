function processData(input) {

    function calcularDistancia(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    function maiorDistanciaFuncionarios(n, coordenadas) {
        let maiorDistancia = 0;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const linha = coordenadas[i];
                const coordenadas1 = linha.split(" ").map(parseFloat);
                const x1 = coordenadas1[0];
                const y1 = coordenadas1[1];

                const linha2 = coordenadas[j];
                const coordenadas2 = linha2.split(" ").map(parseFloat);
                const x2 = coordenadas2[0];
                const y2 = coordenadas2[1];

                const distancia = calcularDistancia(x1, y1, x2, y2);

                if (distancia > maiorDistancia) {
                    maiorDistancia = distancia;
                }
            }
        }

        return maiorDistancia;
    }

    const linhas = input.trim().split("\n");
    const n = parseInt(linhas[0]);
    const coordenadas = linhas.slice(1);

    const resultado = maiorDistanciaFuncionarios(n, coordenadas);

    console.log(resultado);

} 
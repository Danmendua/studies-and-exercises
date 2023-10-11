const express = require('express');
const app = express();
const path = require('path');
let min = 0
let seg = 0
let checar = false

app.use(express.static(path.join(__dirname, '../public')));

function formatarTempo(minutos, segundos) {
    const minFormatado = minutos < 10 ? `0${minutos}` : minutos;
    const segFormatado = segundos < 10 ? `0${segundos}` : segundos;
    return `${minFormatado} minutos e ${segFormatado} segundos`;
}

function iniciador() {
    checar = true;
    setInterval(() => {
        if (checar) {
            if (seg < 60) {
                seg++;
            } else {
                seg = 0
                min++
            }
        }
    }, 1000)
}


// pagina inicial
app.get('/', (req, resp) => {
    const tempoFormatado = formatarTempo(min, seg);
    resp.send(`Tempo atual do cronômetro: ${tempoFormatado}`)
})

// iniciar
app.get('/iniciar', (req, resp) => {
    iniciador();
    resp.send("Cronômetro iniciado!")
})

// pausar
app.get('/pausar', (req, resp) => {
    checar = false;
    resp.send("Cronômetro pausado!")
})

// continuar
app.get('/continuar', (req, resp) => {
    checar = true;
    resp.send("Cronômetro continuando!")
})

// zerar
app.get('/zerar', (req, resp) => {
    min = 0
    seg = 0
    resp.send("Cronômetro zerado!")
})

app.listen(8000);


// usar o localhost:8000 para o cronometro matual
// usar o localhost:8000/cronometro.html para o cronometro automatico
const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const organizador = frutas.map(function (frutineas, index) {
    return `${index} - ${frutineas[0].toUpperCase() + frutineas.slice(1).toLowerCase()}`
});
console.log(organizador)
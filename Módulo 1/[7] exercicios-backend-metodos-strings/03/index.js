const texto = "Hoje eu gostaria de dormir o dia inteiro, mas tenho compromissos";

function formatarURL(url) {
    let urlAmigavel = ""

    for (each of url) {
        if (!each.match(/[.,-=/;[~]/)) {
            urlAmigavel += each
        }
    }
    while (urlAmigavel !== urlAmigavel.replace(" ", "-")) {
        urlAmigavel = urlAmigavel.replace(" ", "-")
    }
    return urlAmigavel.toLocaleLowerCase();
}

console.log(formatarURL(texto)) 
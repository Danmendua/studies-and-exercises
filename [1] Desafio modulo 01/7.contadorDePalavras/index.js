function solucao(texto) {

    function formatarTexto(texto) {

        const espacos = texto.trim()
        const contador = espacos.split(' ')
        const semVazio = contador.filter(elemento => elemento !== '');
        return semVazio.length
    }
    console.log(formatarTexto(texto))

}
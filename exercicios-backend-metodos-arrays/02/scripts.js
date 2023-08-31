const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Victor', 'Alice', 'Grupo', 'só', 'do', 'Daniel'];
const tamanhoDoGrupo = 4;

function separador(grupos, tamanhoDoGrupo) {
    let contador = 0
    for (let i = 0; i < grupos.length; i += tamanhoDoGrupo) {
        const grupo = grupos.slice(i, (i + tamanhoDoGrupo)).join(", ")
        contador++
        console.log(`Grupo ${contador}: ${grupo}`);
    }
}

separador(nomes, tamanhoDoGrupo)
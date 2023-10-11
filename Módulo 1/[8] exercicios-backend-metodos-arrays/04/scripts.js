const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimento(listaDePacientes, atendimento, nome) {
    if (atendimento === "agendar") {
        listaDePacientes.push(nome);
        // inserir um input que pergunte o nome, pra depois retornar ele no final do array
    } else if (atendimento === "atender") {
        listaDePacientes.shift();
        // "atender" = sem necessidade de por o nome, é o próximo.
    }
    console.log(`${listaDePacientes.join(", ")}.`)
}

atendimento(pacientes, "agendar", "Alice") // agendar > perguntar o nome para ir ao final da fila
atendimento(pacientes, "atender") // atender > não pergunta o nome pois vai para atendimento.
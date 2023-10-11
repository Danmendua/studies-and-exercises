const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let listaDeEspera = []

function agendarPaciente(listaDePacientes, nome) {
    listaDePacientes.push(nome);
    // inserir um input que pergunte o nome, pra depois retornar ele no final do array
    console.log(`${listaDePacientes.join(", ")}.`)
}

function atenderPaciente(listaDePacientes) {
    let pacientesParaAtendimento = listaDePacientes.shift();
    listaDeEspera.push(pacientesParaAtendimento)
    // return listaDePacientes
    console.log(listaDePacientes.join(", "));
}

function cancelarAtendimento(lista, nome) {
    const indice = lista.indexOf(nome);
    if (lista[indice] === nome) {
        console.log(`Cancelamento de "${lista[indice]}" feito com sucesso.`)
        lista.splice(indice, 1);
        console.log(`Segue a lista de pacientes atualizada: ${listaDeEspera.join(", ")}.`)
    } else {
        console.log(`O nome não está na lista de atendimentos, talvez esteja para agendamentos.\nSegue a lista de pacientes para atendimento: ${listaDeEspera}.`)
    }
    // console.log(lista)
    // console.log(indice)
    // lista.slice(indice, 1)
}

agendarPaciente(pacientes, "Daniel")
agendarPaciente(pacientes, "Alice")
agendarPaciente(pacientes, "Sabino")
agendarPaciente(pacientes, "Elton")
atenderPaciente(pacientes)
atenderPaciente(pacientes)
atenderPaciente(pacientes)
console.log(`Lista de atendimento: ${listaDeEspera.join(', ')}`)
cancelarAtendimento(listaDeEspera, "Maria")


const bancodedados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Daniel',
            email: 'danmendua@gmail.com',
            status: true
        },
        {
            id: 2,
            nome: 'Alice',
            email: 'alice@gmail.com',
            status: true
        }
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro servidor',
            descricao: 'Construindo o servidor'
        }
    ]
}

module.exports = bancodedados;
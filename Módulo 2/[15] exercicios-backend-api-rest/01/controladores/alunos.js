let { alunos, identificadorAlunos } = require('../dados/alunos');

const listarAlunos = (req, res) => {
    res.status(200).json(alunos);
}

const obterAlunoId = (req, res) => {
    const { id } = req.params;
    const aluno = alunos.find((elemento) => {
        return elemento.id === Number(id)
    });
    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    } else if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não foi encontrado' })
    }
    return res.status(200).json(aluno);
};

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    if (!nome || nome.length === 0 || nome.trim() === '') { // nome
        return res.status(400).json({ mensagem: 'É necessário preencher o nome' });
    } else if (!sobrenome || sobrenome.length === 0 || sobrenome.trim() === '') { // sobrenome
        return res.status(400).json({ mensagem: 'É necessário preencher o sobrenome' });
    } else if (!idade) {
        return res.status(400).json({ mensagem: 'É necessário preencher a idade' });
    } else if (idade < 18) {
        return res.status(400).json({ mensagem: 'É necessário ser maior de 18 anos' });
    } else if (!curso || curso.length === 0 || curso.trim() === '') { // curso
        return res.status(400).json({ mensagem: 'É necessário preencher o curso' });
    }

    const aluno = {
        id: identificadorAlunos++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno)
    return res.status(201).json();
};

const deletarAlunos = (req, res) => {
    const { id } = req.params;
    const aluno = alunos.find((elemento) => {
        return elemento.id === Number(id)
    });
    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    } else if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não foi encontrado' })
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id)
    });

    return res.status(200).json(aluno);

}


module.exports = {
    obterAlunoId,
    listarAlunos,
    cadastrarAluno,
    deletarAlunos
}
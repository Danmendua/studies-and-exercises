let { livros, idLivro } = require('../dados');

const todosLirvos = (req, res) => {
    res.status(200).json(livros);
};

const consultaLivro = (req, res) => {
    const { id } = req.params;
    const acharLivro = livros.find((elemento) => elemento.id === Number(id))
    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    } else if (!acharLivro) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." });
    } else {
        return res.status(200).json(acharLivro)
    }
};

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body


    const novoLivro = {
        id: idLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novoLivro)
    res.send(novoLivro)
};

const substituirLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body
    const acharLivro = livros.find((elemento) => elemento.id === Number(id))

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    } else if (!acharLivro) {
        return res.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado." });
    } else if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: "Todos os campos (titulo, autor, ano e numPaginas) devem ser informados." });
    } else if (!titulo.trim() || !autor.trim() || !ano.trim() || !String(numPaginas).trim()) {
        return res.status(400).json({ mensagem: "Obrigatório o preenchimento de todos os campos (verifique se não tem nada vazio)." });
    } else {
        acharLivro.titulo = titulo;
        acharLivro.autor = autor;
        acharLivro.ano = ano;
        acharLivro.numPaginas = numPaginas;
        return res.status(200).send({ mensagem: "Livro substituído." });
    }
};

const alterarLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body
    const acharLivro = livros.find((elemento) => elemento.id === Number(id))
    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    } else if (!acharLivro) {
        return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." });
    }
    if (titulo || autor || ano || numPaginas) {
        if (titulo) {
            acharLivro.titulo = titulo;
        }
        if (autor) {
            acharLivro.autor = autor;
        }
        if (ano) {
            acharLivro.ano = ano;
        }
        if (numPaginas) {
            acharLivro.numPaginas = numPaginas;
        }
        return res.status(200).send({ mensagem: "Livro alterado." });
    } else {
        return res.status(400).json({ mensagem: "Nenhum dado de livro fornecido para alteração." });
    }
}
// ---------------- princípio DRY acima ---------------- //
//     else if (titulo) {
//         acharLivro.titulo = titulo;
//         return res.status(200).send({ mensagem: "Livro alterado." });
//     } else if (autor) {
//         acharLivro.autor = autor;
//         return res.status(200).send({ mensagem: "Livro alterado." });
//     } else if (ano) {
//         acharLivro.ano = ano;
//         return res.status(200).send({ mensagem: "Livro alterado." });
//     } else if (numPaginas) {
//         acharLivro.numPaginas = numPaginas;
//         return res.status(200).send({ mensagem: "Livro alterado." });
//     }
// }

const deletarLivro = (req, res) => {
    const { id } = req.params;
    const acharLivro = livros.find((elemento) => elemento.id === Number(id));

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }

    if (acharLivro) {
        const indice = livros.indexOf(acharLivro);
        livros.splice(indice, 1);
        return res.status(201).json({ mensagem: "Livro removido." });
    } else {
        return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." });
    }
};

module.exports = {
    todosLirvos,
    consultaLivro,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    deletarLivro
}
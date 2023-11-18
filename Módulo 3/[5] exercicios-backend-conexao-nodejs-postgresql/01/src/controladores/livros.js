const pool = require('../conexao');


const cadastrarLivro = async (req, res) => {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params

    try {
        const query = `insert into livros (nome, genero, editora, data_publicacao, id_autor) values ($1, $2, $3, $4::date, $5) returning *`
        const params = [nome, genero, editora, data_publicacao, id];
        const resultado = await pool.query(query, params);;
        return res.json(resultado.rows);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const listarLivros = async (req, res) => {
    try {
        const select = `select 
        a.id as autor_id, a.nome as autor_nome, a.idade as autor_idade,
        l.id, l.nome, l.genero, l.editora, to_char(l.data_publicacao, 'YYYY-MM-DD') as data_publicacao
        from autores as a
        join livros as l on a.id = l.id_autor;`
        const resultado = await pool.query(select);;

        if (resultado.rowCount === 0) {
            return res.status(400).json({ "mensagem": "Livro não encontrado" })
        }
        const livros = resultado.rows.map(row => ({
            id: row.id,
            nome: row.nome,
            genero: row.genero,
            editora: row.editora,
            data_publicacao: row.data_publicacao,
            autor: {
                id: row.autor_id,
                nome: row.autor_nome,
                idade: row.autor_idade
            }
        }));
        return res.json(livros);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

module.exports = {
    cadastrarLivro,
    listarLivros
};
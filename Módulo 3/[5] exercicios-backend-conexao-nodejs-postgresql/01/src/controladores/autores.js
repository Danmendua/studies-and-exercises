const pool = require('../conexao');

const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body;
    try {
        const query = `insert into autores (nome, idade) values ($1, $2) returning *`
        const params = [nome, idade];
        const resultado = await pool.query(query, params);;
        return res.json(resultado.rows);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const buscarAutorELivro = async (req, res) => {
    const { id } = req.params;
    try {
        const select = `select 
        a.id as autor_id, a.nome as autor_nome, a.idade as autor_idade,
        l.id, l.nome, l.genero, l.editora, to_char(l.data_publicacao, 'YYYY-MM-DD') as data_publicacao
        from autores as a
        join livros as l on a.id = l.id_autor
        where a.id = $1;`
        const params = [id]
        const resultado = await pool.query(select, params);;

        if (resultado.rowCount === 0) {
            return res.status(400).json({ "mensagem": "Livro não encontrado" })
        }
        const livros = {
            id: resultado.rows[0].autor_id,
            nome: resultado.rows[0].autor_nome,
            idade: resultado.rows[0].autor_idade,
            livros: resultado.rows.map(row => ({
                id: row.id,
                nome: row.nome,
                genero: row.genero,
                editora: row.editora,
                data_publicacao: row.data_publicacao
            }))
        };
        return res.json(livros);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

module.exports = {
    cadastrarAutor,
    buscarAutorELivro,
};
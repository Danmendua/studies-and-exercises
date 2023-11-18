const send = require('../services/nodemailer');
const knex = require('../connection');
const htmlCompiler = require('../services/htmlCompiler')

const sendEmail = async (req, res) => {
    const { subject } = req.body;


    try {
        const emails = await knex('usuarios')
        console.log(emails)

        for (const each of emails) {

            const html = await htmlCompiler('./src/templates/email.html', {
                nomeUsuario: each.nome,
            })
            const to = each.email
            await send(to, subject, html)
        }
        return res.json({ mensagem: 'Emails enviados com sucesso' });

    } catch (error) {
        console.log('Erro no sendEmal' + error.message);
        return res.status(500).json({ Mensagem: "Erro interno do servidor" })
    }
};




module.exports = sendEmail;
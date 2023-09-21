

const somar = (req, res) => {
    const resultado = `${Number(req.query.num1) + Number(req.query.num2)}`;
    return res.send(resultado);
}

const subtrair = (req, res) => {
    const resultado = `${Number(req.query.num1) - Number(req.query.num2)}`;
    return res.send(resultado);
}

const multiplicar = (req, res) => {
    const resultado = `${Number(req.query.num1) * Number(req.query.num2)}`;
    return res.send(resultado);
}

const dividir = (req, res) => {
    const resultado = `${Number(req.query.num1) / Number(req.query.num2)}`;
    return res.send(resultado);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}
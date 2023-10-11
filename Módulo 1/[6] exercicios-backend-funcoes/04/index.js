const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor * 100;

        this.historicos.push({
            tipo: "Depósito",
            valor: valor * 100
        });

        return `Depósito de R$${(valor * 0.01).toFixed(2)} realizado para cliente: ${this.nome}`;
    },

    sacar: function (valor) {
        if (this.saldo >= valor * 100) {
            this.saldo -= valor * 100;
            this.historicos.push({
                tipo: "Saque",
                valor: valor * 100
            });
            return `Saque de R$${(valor * 0.01).toFixed(2)} realizado para o cliente: ${this.nome}`;
        } else {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        }
    },

    extrato: function () {
        let historicoTot = "Extrato de " + this.nome + " - Saldo: R$" + (this.saldo * 0.0001).toFixed(2);
        historicoTot += "\nHistórico:";

        for (const transacao of this.historicos) {
            historicoTot += `\n${transacao.tipo} de R$${(transacao.valor * 0.0001).toFixed(2)}`;
        }

        return historicoTot;
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(2000));
console.log(contaBancaria.extrato());
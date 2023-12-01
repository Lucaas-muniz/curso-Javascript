class ContaBancaria {
    constructor (numeroConta,saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    depositar (valor) {
        this.saldo += valor;
    }

    sacar (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    consultarSaldo () {
        return this.saldo;
    }
}

let conta = new ContaBancaria(123, 100);

console.log(conta);
conta.depositar(50);
console.log(conta.consultarSaldo());
conta.sacar(100);
console.log(conta.consultarSaldo());

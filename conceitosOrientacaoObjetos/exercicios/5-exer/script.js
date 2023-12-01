class Conta {
    constructor(saldoCorrente, saldoPoupança, jurosPoupanca) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupança = saldoPoupança;
        this.jurosPoupanca = jurosPoupanca;
    }

    saldo(op) {
        if (op == 1) {
            console.log(`O saldo da sua conta corrente é de R$ ${this.saldoCorrente}`);

        } else {
            console.log(`O saldo da sua conta poupança é de R$ ${this.saldoPoupança}`);
        }
    }

    deposito(dinheiroDeposito, op) {
        if (op == 1) {
            this.saldoCorrente += dinheiroDeposito;
            console.log('Dinheiro depositado com sucesso!');
            this.saldo(op);
        } else {
            this.saldoPoupança += dinheiroDeposito;
            console.log('Dinheiro depositado com sucesso!');
            this.saldo(op);
        }
    }

    saque(dinheiroSaque, op) {
        if (op == 1) {
            if ((this.saldoCorrente > dinheiroSaque) && ((this.saldoCorrente - dinheiroSaque) > 0)) {
                this.saldoCorrente -= dinheiroSaque;
                console.log(`Você sacou R$ ${dinheiroSaque} da sua conta corrente`);
                this.saldo(1);
            } else {
                console.log("Você não possui saldo suficiente para realizar está operação");
            }
        } else {
            if ((this.saldoPoupança > dinheiroSaque) && ((this.saldoPoupança - dinheiroSaque) > 0)) {
                this.saldoPoupança -= dinheiroSaque;
                console.log(`Você sacou R$ ${dinheiroSaque} da sua conta poupança`);
                this.saldo(0);
            } else {
                console.log("Você não possui saldo suficiente para realizar está operação");
            }

        }
    }

    transferencia(dinheiroTransferencia) {
        if ((this.saldoPoupança > 0) && (dinheiroTransferencia < this.saldoPoupança)) {
            this.saldoCorrente += dinheiroTransferencia;
            this.saldoPoupança -= dinheiroTransferencia;
        } else {
            console.log("Você não possui saldo suficiente para essa transferencia");
        }
    }

    juros() {
        this.saldoPoupança += this.saldoPoupança * this.jurosPoupanca;
        return this.saldoPoupança;
    }

}


class ContaEspecial extends Conta {
    constructor(saldoCorrente, saldoPoupança, jurosPoupanca) {
        super(saldoCorrente, saldoPoupança, jurosPoupanca);
    }

    juros() {
        this.saldoPoupança += this.saldoPoupança * this.jurosPoupanca;
        return this.saldoPoupança * 2;
    }
}

let conta1 = new Conta(100,500,.2);
console.log(conta1);
console.log(conta1.saldoCorrente);
conta1.saldo(1);
conta1.saldo(0);
conta1.deposito(50,1);
conta1.deposito(20,0);
conta1.saque(10,1);
conta1.saque(20,0);
console.log(conta1.juros());

let conta2 = new ContaEspecial(100, 200, .2);
console.log(conta2);

conta1.saldo(1);
conta1.saldo(0);
conta1.transferencia(40);
conta1.saldo(1);
conta1.saldo(0);

conta2.deposito(4000,1);
conta2.saldo(0);
conta2.juros();
conta2.saldo(0);

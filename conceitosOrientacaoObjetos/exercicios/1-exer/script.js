class Banco {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valorDeposito){
        this.saldo += valorDeposito;
    }

    saque (valorSaque) {
        this.saldo -= valorSaque;
    }

}

let conta1 = new Banco(1000);
console.log('Você possui R$ ' + conta1.saldo + ' de saldo');

conta1.saque(50);
console.log('Você possui R$ ' + conta1.saldo + ' de saldo');
conta1.deposito(500);
console.log('Você possui R$ ' + conta1.saldo + ' de saldo');

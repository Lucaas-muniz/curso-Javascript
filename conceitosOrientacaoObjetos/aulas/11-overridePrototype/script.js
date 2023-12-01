class Funcionario {
    constructor(salario, nome, cargo) {
        this.salario = salario;
        this.nome = nome;
        this.cargo = cargo;
    }
    saudacao() {
        return 'Bom dia!';
    }
}

Funcionario.prototype.filial = "loja 1";
Funcionario.prototype.cargo = "qualquer";


let colaborador1 = new Funcionario(2.200, 'Lucas', 'repositor');

console.log(colaborador1);
console.log(colaborador1.filial);
console.log(colaborador1.saudacao());
console.log(Funcionario.prototype.cargo);
console.log(colaborador1.cargo);
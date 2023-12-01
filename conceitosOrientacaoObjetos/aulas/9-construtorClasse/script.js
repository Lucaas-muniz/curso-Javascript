class Funcionario{
    constructor (salario, nome, cargo){
        this.salario = salario;
        this.nome = nome;
        this.cargo = cargo;
    }
}


let colaborador1 = new Funcionario(2.200, 'Lucas', 'Reposição');

console.log(colaborador1);
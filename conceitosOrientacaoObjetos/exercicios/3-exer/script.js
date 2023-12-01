class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set setRua(rua) {
        this.rua = rua;
    }

    get getRua() {
        console.log(this.rua);
    }
    set setBairro(bairro) {
        this.bairro = bairro;
    }

    get getBairro() {
        console.log(this.bairro);
    }
    set setCidade(cidade) {
        this.cidade = cidade;
    }

    get getCidade() {
        console.log(this.cidade);
    }
    set setEstado(estado) {
        this.estado = estado;
    }

    get getEstado() {
        console.log(this.estado);
    }
}

let endereco1 = new Endereco("Francisco Inácio", 'Jaguaribe','Campos do Jordao', 'São Paulo');
console.log(endereco1);

endereco1.setCidade = 'Taubáte';
endereco1.getCidade;
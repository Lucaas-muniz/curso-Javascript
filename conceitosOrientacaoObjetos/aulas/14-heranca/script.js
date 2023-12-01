class Mamiferos {
    constructor(patas) {
        this.patas = patas;
    }
}

class Gato extends Mamiferos{
    constructor(nome, cor,patas) {
        super(patas,patas);
        this.nome = nome;
        this.cor = cor;
    }

    miado() {
        console.log('miau, miau');
    }

    get getNome() {
        return this.nome;
    }

    set setNome(nome) {
        this.nome = nome;
    }

}

let gato1 = new Gato('Sansa', 'beje', 4);

console.log(gato1);
console.log(gato1.getNome);
gato1.setNome = 'Mel';
console.log(gato1.getNome);
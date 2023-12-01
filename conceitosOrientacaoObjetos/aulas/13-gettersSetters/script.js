class Carro {
    constructor(marca, cor) {
        this.marca = marca;
        this.cor = cor;
    }

    roncoMotor() {
        console.log("Vrum Vrum Vrum");
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}


let gol = new Carro("Wollkswagen", 'Branco');

console.log(gol);
console.log(gol.getCor);
gol.setCor = 'Vermelho';
console.log(gol.getCor);

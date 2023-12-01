class Carro {
    constructor(marca, cor, gasolinaRestante) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }

    dirigir() {
        while (this.gasolinaRestante > 0) {
            console.log('------' + this.gasolinaRestante + ' litros de gasolina restantes')
            this.gasolinaRestante--;
        }
    }

    abastecer(gasolina) {
        this.gasolinaRestante += gasolina;
    }
}

let carro1 = new Carro("Fiat", "Preto", 50);

carro1.dirigir();
carro1.abastecer(20);
console.log(carro1.gasolinaRestante);
carro1.dirigir();
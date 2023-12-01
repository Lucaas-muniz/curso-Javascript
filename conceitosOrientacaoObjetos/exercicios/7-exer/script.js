class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea () {
        return this.largura * this.altura;
    }

    calcularPerimetro () {
        return 2 * this.calcularArea();
    }
}

let ret = new Retangulo(9,3);
console.log(ret.calcularArea());
console.log(ret.calcularPerimetro());
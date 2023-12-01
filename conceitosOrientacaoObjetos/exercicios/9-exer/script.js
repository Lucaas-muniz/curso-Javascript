class Voo {
    constructor (codigoVoo,origem,destino,assentosDisponiveis) {
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }

    reservarAssento() {
        if (this.assentosDisponiveis > 0) {
            this.assentosDisponiveis--;
        } else {
            console.log('Não há assentos disponíveis para reserva.');
        }
    }

    consultarAssentosDisponiveis() {
        return this.assentosDisponiveis;
    }
}

let voo = new Voo('1234','São Paulo', 'Belo Horizonte',60);
console.log(voo);
console.log(voo.consultarAssentosDisponiveis());
voo.reservarAssento();
voo.reservarAssento();
voo.reservarAssento();
voo.reservarAssento();
voo.reservarAssento();
console.log(voo.consultarAssentosDisponiveis());

class Livro {
    constructor(titulo, autor, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }

    emprestar() {

        if (this.disponivel == true) {
            this.disponivel = false;
           
        } else {
           return console.log('Indisponível');
        }

    }

    devolver() {
        if (this.disponivel == false) {
            this.disponivel = true;
        } else {
            console.log('Indisponível');
        }
    }

    consultarDisponibilidade() {
        if (this.disponivel == true) {
            return console.log('Disponível');
        } else {
            return console.log('Indisponível');
        }
    }
}

let livro1 = new Livro('Avanti', 'Abel Ferreira', true);
console.log(livro1);
console.log(livro1.consultarDisponibilidade());
livro1.emprestar();
console.log(livro1.consultarDisponibilidade());
livro1.devolver();
console.log(livro1.consultarDisponibilidade());

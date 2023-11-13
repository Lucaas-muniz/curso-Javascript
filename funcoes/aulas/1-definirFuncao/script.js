function imprimirNoConsole() {
    console.log('Olá mundo!');
}

imprimirNoConsole();

function imprimirUmNumero(n) {
    console.log("O número passado por parametro é " + n);
}

imprimirUmNumero(4);
imprimirUmNumero(5);
imprimirUmNumero(-5);
imprimirUmNumero(42);

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();
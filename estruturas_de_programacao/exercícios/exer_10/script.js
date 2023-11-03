let numero = 5;
let i = 1;
let divisoes = 0;
while (i <= numero) {

    if (numero % i == 0) {
        divisoes++;
    }
    i++;
}

if (divisoes == 2) {
    console.log(`O número ${numero} é um número primo`)
} else {
    console.log(`O número ${numero} não é um número primo`)
}

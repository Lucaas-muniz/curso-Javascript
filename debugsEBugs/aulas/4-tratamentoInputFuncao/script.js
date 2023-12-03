function checarNumero (num) {
    let numero = Number (num);
    if(Number.isNaN(numero)){
        alert("Por favor insira um numero");
    } else {
        return numero;
    }
}

let a =prompt('digite um numero');

console.log(checarNumero(a));

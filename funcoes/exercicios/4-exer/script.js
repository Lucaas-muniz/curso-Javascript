const aleatorio = () => {
    let b = 0;
    for (let i = 0; i < 10; i++) {
        
        let a = Math.round(20 * (Math.random() * Math.random()));
        console.log(a);
        if (a > b) {
            b = a;
        }
    }
    return b;
}

console.log("numero retornado - "+aleatorio());

function numeroAleatorio(n) {
    return Math.floor(Math.random() * n) + 1;
}

console.log(numeroAleatorio(10));
console.log(numeroAleatorio(5));
console.log(numeroAleatorio(100));
function lembrarSoma(x)  {
    return function(y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));

let soma2 = lembrarSoma(4);
console.log(soma2(5));





function contador (i) {
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(10);
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(0);
meuContador2();
meuContador2();
meuContador2();
meuContador2();
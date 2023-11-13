function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,4,5));

const mult = multiplicarTresNumeros(2,2,4);
console.log(`O valor de mult é ${mult}`);

function podeDirigir(idade,cnh) {
    if (idade >= 18 && cnh == true) {
        console.log('Pode dirigir');
    } else {
        console.log('Não pode dirigir');
    }
}

console.log(podeDirigir(18,true));
console.log(podeDirigir(18,false));
console.log(podeDirigir(18,1));
console.log(podeDirigir(18,0));
console.log(podeDirigir(10,true));

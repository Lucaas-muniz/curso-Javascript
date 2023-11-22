let a = 1;
let b = 4;
let c = 5;
let d = 2;
let e = 7;

function imprimirNumeros (...args){
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);        
    }
}
imprimirNumeros(a,b,c,d,e);
imprimirNumeros(a,b,e);
imprimirNumeros(b,c,d);
imprimirNumeros(1,2,3,4,5,6,7,8,9);
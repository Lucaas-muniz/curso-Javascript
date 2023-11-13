function detectaTipo (dado) {
    console.log("O tipo de dado passado é " + typeof(dado));
}

let a = 1;
let b = "lucas";
let c = true;

detectaTipo(a);
detectaTipo(b);
detectaTipo(c);

const detecta = (objeto) => typeof(objeto);

console.log("O tipo de dado passado é " + detecta(a));
console.log("O tipo de dado passado é " + detecta(b));
console.log("O tipo de dado passado é " + detecta(c));
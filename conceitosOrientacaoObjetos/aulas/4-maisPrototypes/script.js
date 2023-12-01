const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoa.maos);
console.log(Object.keys(pessoaNova));
console.log(Object.keys(pessoa));
console.log(pessoaNova.hasOwnProperty('maos'));
let pessoa = {
    nome:'Lucas'
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

let pessoa3 = {
    nome:'Lucas'
}

console.log(pessoa == pessoa3);

console.log(pessoa2.nome);

pessoa.nome = "Ana";
console.log(pessoa2.nome);

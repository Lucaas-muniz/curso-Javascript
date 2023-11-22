let pessoa = {
    "nome": "Lucas",
    "idade": 30,
    "profissao": "Programador",
    "hobbies" : ["video game", "ouvir música", "pedalar"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoa);
console.log(pessoaTexto);
console.log(pessoa.hobbies);

let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);
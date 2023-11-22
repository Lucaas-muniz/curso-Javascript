let nomes = ['Lucas', 'Matheus', 'Ana', 'Pedro'];

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

for(let nome of nomes ) {
    console.log(nome);
}

let elementoRemovido = nomes.pop();

console.log(elementoRemovido);

nomes.push('João');
for(let nome of nomes ) {
    console.log(nome);
}
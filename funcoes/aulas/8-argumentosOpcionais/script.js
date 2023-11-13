function NomeComIdade(nome,idade) {
    if (idade == undefined) {
        console.log('O seu nome é ' + nome);
    } else {
        console.log('O seu nome é ' + nome + ", e sua idade é " + idade);

    }
}

NomeComIdade('Lucas',30);
NomeComIdade('Lucas');

function saudacao(nome,idade) {
    if (nome == undefined || idade == undefined) {
        console.log('É necessário passar os dois argumentos!');
    } else {
        console.log(`Olá, ${nome}, você tem ${idade} anos!`);
    }
}
let nome = 'Lucas';
saudacao(nome);
saudacao(nome,30);
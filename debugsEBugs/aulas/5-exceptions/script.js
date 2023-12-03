function saudacao (nome) {
    if(typeof nome != 'string'){
        throw new Error ('o parâmetro precisa ser uma string');
    } else {
        console.log(`Olá ${nome}`);
    }
}

saudacao("Lucas");
saudacao(1);
console.log('teste');
let pessoa = {
    nome:'Lucas',
    idade:30,
    cor:'branco',
    sexo:'masculino',
    exibir: function(){
        console.log(pessoa);
    }
}

pessoa.exibir();

delete pessoa.sexo;

pessoa.exibir();

pessoa.trabalho = 'repositor';

pessoa.exibir();
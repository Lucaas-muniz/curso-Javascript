let nomes = ["Ana", "Pedro", "Jorge", "Lucas", "Carlos"];

nomes.forEach($nome => {
    if ($nome == "Lucas") {
        console.log('O nome '+ $nome +' foi encontrado atraves do loop forEach');
    }
});

if (nomes.includes("Ana")) {
    console.log("O nome Ana foi encontrado atraves do metodo includes")
}
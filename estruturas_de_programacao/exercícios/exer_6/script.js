let idade = 15;
let cnh = false;

if (idade >= 18 && cnh == false) {
    console.log('Voce precisa ter cnh para dirigir!');
} else if(idade >= 18 && cnh == true) {
    console.log('Voce pode dirigir!');
} else if (idade < 18 && cnh == false) {
    console.log("Voce precisa ter 18 anos pelo menos e possuir cnh para dirigir!");
}
let novoElemento = document.createElement("p");

let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);
let elementoAlvo = document.getElementById('titulo');
let elementoPai = document.querySelector(".header");

elementoPai.insertBefore(novoElemento, elementoAlvo);



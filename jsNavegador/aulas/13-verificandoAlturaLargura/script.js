let elemento = document.querySelector('#titulo');
console.log(elemento.offsetWidth);//considera as bordas
console.log(elemento.offsetHeight);
console.log(elemento.clientWidth); //não considera as bordas
console.log(elemento.clientHeight);
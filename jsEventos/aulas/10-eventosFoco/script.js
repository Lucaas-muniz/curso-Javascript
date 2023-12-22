let input = document.querySelector('input');
let input2 = document.querySelector('#input2');

input.addEventListener('focus', function () {
    console.log('entrou no input');
});
input2.addEventListener('blur', function () {
    console.log('saiu do input');
});
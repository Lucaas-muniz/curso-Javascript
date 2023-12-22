let btn = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let p = document.querySelector('p');
let a = document.querySelector('a');
function msg(e) {
    console.log('clicou no button');
    e.stopPropagation();
}

btn.addEventListener('click', msg);

btn2.addEventListener('click', function (event) {
    console.log(event);
});

p.addEventListener('click', function () {
    console.log("clicou no paragrafo");
});

a.addEventListener('click', function(e){
    e.preventDefault();

    console.log('não vai mudar de link');
});

window.addEventListener('keydown', function(e){
    if(e.key == 'q'){
        console.log('apertou letra q');
    } else if(e.key == 'Enter') {
        console.log('apertou enter');
    }
});

window.addEventListener('keyup', function (e){
    if(e.key == 'Enter') {
        console.log('soltou o enter');
    }
});
window.addEventListener('keypress', function (e){
    if(e.key == 'Enter') {
        console.log('está pressionando o enter');
    }
});
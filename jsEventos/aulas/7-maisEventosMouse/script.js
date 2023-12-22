let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('mousedown', function(){
    console.log("apertou o botão");
});
btn1.addEventListener('mouseup', function(){
    console.log("soltou o botão");
});
btn2.addEventListener('dblclick', function(){
    console.log("apertou duas vezes o botão");
});
btn2.addEventListener('contextmenu', function(e){
    e.preventDefault();
    console.log("apertou o botão direito");
});

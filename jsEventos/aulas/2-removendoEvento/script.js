let btn = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
function msg() {
    console.log('Hello World!');
}

btn.addEventListener('click', msg);

btn2.addEventListener('click', function () {
    btn.removeEventListener('click', msg);
});
let btn = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
function msg(e) {
    console.log(e);
}

btn.addEventListener('click', msg);

btn2.addEventListener('click', function (event) {
    console.log(event);
});
// window.addEventListener('load', function(){
//     alert('Assine nossos termos');
// });

window.addEventListener('beforeunload', function (e) {
    e.returnValue = null;
});
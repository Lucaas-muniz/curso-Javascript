let arr = [1, 2, 5, 7, -7, 1.4, 0.3];
let arr2 = [true, false, false];

function verificaNumeroElementos(a) {
    if (a.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
};


verificaNumeroElementos(arr);
verificaNumeroElementos(arr2);

const verificaElementos = (a) => {
    if (a.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
};

verificaElementos(arr);
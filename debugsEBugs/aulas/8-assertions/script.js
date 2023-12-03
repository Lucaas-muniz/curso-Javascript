let arr = [1, 2, 3, 4, 5];

let arr2 = [];

function iterarArray(arr) {
    if (arr.length == 0) {
        throw new Error('o array não pode estar vazio');
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(i);
        }
    }
}

iterarArray(arr);
iterarArray(arr2);

function arrayVazio(arr) {
    if(arr.length > 0) {
        throw new Error ('o array não pode ter elementos');
    } else {
        console.log('deu certo');
    }
}

arrayVazio(arr);
arrayVazio(arr2);
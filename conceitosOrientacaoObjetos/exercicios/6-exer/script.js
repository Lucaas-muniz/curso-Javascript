class wordCounter {
    constructor (obj){
        this.obj = obj;
    }
    
    countWords(str){
        let a = str.split(" ");
        return a.length;
    }
}

let contador = new wordCounter({});

console.log(contador.countWords("Vamos vamos porco! Avanti Palestra!"));
const cachorro = {
    raca: 'SRD',
    uivar: function(){
        console.log('Auuuuuuu');
    },
    rosnar: function(){
        console.log('Grrrrr');
    },
    setRaca: function(novaRaca){
        this.raca = novaRaca;
    },
    getRaca: function(){
        return 'A raça é ' + this.raca;
    }
}

console.log(cachorro.raca);
cachorro.setRaca('Beagle');
console.log(cachorro.raca);
console.log(cachorro.getRaca());
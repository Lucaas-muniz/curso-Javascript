const onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2
};

console.log(onibus.rodas,onibus.limiteDePassageiros,onibus.portas);

onibus.janelas = 20;

delete onibus.rodas;
console.log(onibus.janelas);
console.log(onibus);
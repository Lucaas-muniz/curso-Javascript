const teste = /\d+/;
//ele retorna o obj com as informações, ou entao retorna null
console.log(teste.test('a'));
console.log(teste.test(' '));
console.log(teste.test('2'));
console.log(teste.exec('tem o numero 2 aqui'));
console.log(teste.exec('tem o numero aqui'));

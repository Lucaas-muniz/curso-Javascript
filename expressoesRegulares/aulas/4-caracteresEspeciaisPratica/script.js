let ano = /\d\
console.log(ano.test('05'));
console.log(ano.test('2023'));
console.log(ano.test('opa'));

let palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test('05') && '05'.length == 2);
console.log(palavraTresLetras.test('2023') && '2023'.length == 2);
console.log(palavraTresLetras.test('opa')) && 'opa'.length == 2;


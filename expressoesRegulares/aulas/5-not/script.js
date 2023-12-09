let notab = /[^ab]/;
// so funciona com eles isoladamente
console.log(notab.test('a'));
console.log(notab.test('aqui tem a'));
console.log(notab.test('bae'));

let notaz = /[^a-z]/;
//true para todos os outros caracteres exceto letras
console.log(notaz.test('a'));
console.log(notaz.test('aquiafergetgth '));
console.log(notaz.test('bae'));
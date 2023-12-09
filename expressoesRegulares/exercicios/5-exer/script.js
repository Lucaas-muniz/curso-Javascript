const validaUsuario = /^(?=.{3,16}$)[a-zA-Z0-9-_]/;

console.log(validaUsuario.test('Anaa'));
console.log(validaUsuario.test('           '));
console.log(validaUsuario.test('_lucas-aa'));
const reg1 = /[12345]/;

console.log(reg1.test('temos o numero 6'));
console.log(reg1.test('temos o numero 2'));
console.log(reg1.test('temos o numero 23'));

// maneira mais fácil de verificar se possui um numero numa string
const reg2 = /[0-9]/;

console.log(reg2.test('temos o numero 6'));
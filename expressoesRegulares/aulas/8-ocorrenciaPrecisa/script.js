const cep = /\d{5}-\d{3}/;

console.log(cep.test('12460-000'));
console.log(cep.test('12460-00'));
console.log(cep.test('1246-000'));
console.log(cep.test('12460-00000'));
console.log(cep.test('124600-000'));
console.log(cep.test('rwr'));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log(tel.test('(12)12460-0000'));

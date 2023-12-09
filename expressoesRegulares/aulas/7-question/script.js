const question = /prova?/;

console.log(question.test('a'));
console.log(question.test('prova'));
console.log(question.test('prov'));
console.log(question.test('prova 2'));
console.log(question.test('prova 23 f'));

const question2 = /prova\s?\d?/;

console.log(question2.test('a'));
console.log(question2.test('prova'));
console.log(question2.test('prov'));
console.log(question2.test('prova 2'));
console.log(question2.test('prova 23 f'));


const question3 = /\d+\w?/;

console.log(question3.test('a'));
console.log(question3.test('prova'));
console.log(question3.test('prov'));
console.log(question3.test('prova 23 f'));
console.log(question3.test('prova 2'));
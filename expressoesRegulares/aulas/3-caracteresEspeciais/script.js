const pontoRegex = /./;
// aceita tudo
console.log('.');
console.log(pontoRegex.test('asd'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('asd25'));
console.log(pontoRegex.test('~`#'));

const dRegex = /\d/; 
// mesma coisa que [0-9]
console.log('\d');
console.log(dRegex.test('asd'));
console.log(dRegex.test(' '));
console.log(dRegex.test('123'));
console.log(dRegex.test('asd25'));
console.log(dRegex.test('~`#'));

const dRegex2 = /\D/; 
//mesma coisa que [^0-9]
console.log('\D');
console.log(dRegex2.test('asd'));
console.log(dRegex2.test(' '));
console.log(dRegex2.test('123'));
console.log(dRegex2.test('asd25'));
console.log(dRegex2.test('~`#'));

const sRegex = /\s/;
//serve para espaços vazios, quebras de linhas e ate tabs 
console.log('\s');
console.log(sRegex.test('asd'));
console.log(sRegex.test(' '));
console.log(sRegex.test('123'));
console.log(sRegex.test('asd25'));
console.log(sRegex.test('~`#'));

const sRegex2 = /\S/;
//é a negação do s minusculo
console.log('\S');
console.log(sRegex2.test('asd'));
console.log(sRegex2.test(' '));
console.log(sRegex2.test('123'));
console.log(sRegex2.test('asd25'));
console.log(sRegex2.test('~`#'));

const wRegex = /\w/;
//só aceita caracteres alfanumericos 
console.log('\w');
console.log(wRegex.test('asd'));
console.log(wRegex.test(' '));
console.log(wRegex.test('123'));
console.log(wRegex.test('asd25'));
console.log(wRegex.test('~`#'));

const wRegex2 = /\W/;
//negação do \w
console.log('\W');
console.log(wRegex2.test('asd'));
console.log(wRegex2.test(' '));
console.log(wRegex2.test('123'));
console.log(wRegex2.test('asd25'));
console.log(wRegex2.test('~`#'));

const maiusculas = /^[A-Z]+$/;

console.log(maiusculas.test('avanti'));
console.log(maiusculas.test('AVANTI'));
console.log(maiusculas.test('A'));
console.log(maiusculas.test('12AA'));
console.log(maiusculas.test(' AA'));


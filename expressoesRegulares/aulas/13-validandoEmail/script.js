const validandoEmail = /\w+@\w+\.\w+/;

console.log(validandoEmail.test('luckasmuniz@gmail.com'));
console.log(validandoEmail.test('luckasmuniz@gmail'));
console.log(validandoEmail.test('@gmail.com'));
console.log(validandoEmail.test('a@gmail.com'));

const validaId = /\d+ID\b/;
//\b garante que a validação sempre ocorra se o id estiver no final da string
console.log(validaId.test('ola'));
console.log(validaId.test('123ID'));
console.log(validaId.test('123id'));
console.log(validaId.test('ID'));
console.log(validaId.test('123 I D'));

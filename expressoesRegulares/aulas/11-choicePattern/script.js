const reg = /\w+: (Lucas|Ana|Emilly)/; // Nome: sfdghfyj
console.log(reg.test("nome: Lucas"));
console.log(reg.test("nome: Bia"));
console.log(reg.test("nome:Lucas"));
console.log(reg.test("nome Lucas"));

const reg2 = /\w+: \w+/;

console.log(reg2.test('Nome: Joel'));
console.log(reg2.test('Nome:Joel'));
console.log(reg2.test('Nom2e: Joel'));
console.log(reg2.test('2: Joel'));
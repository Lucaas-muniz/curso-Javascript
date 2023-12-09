const validaMarca = /^Marca: (Nike|Adidas|Puma|Asics)$/;
console.log(validaMarca.test('Marca: Nike'));
console.log(validaMarca.test('Marca: Asics'));
console.log(validaMarca.test('Marca: Puma'));
console.log(validaMarca.test('Marca: Adidas'));
console.log(validaMarca.test('Marca: Ad'));
console.log(validaMarca.test('Marca Adidas'));
console.log(validaMarca.test('Marca:Adidas NIke'));
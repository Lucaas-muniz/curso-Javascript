const validarDatas = /[0-31]{2}[/][0-12]{2}[/]19[5-9]\d|20[0-4]\d|2050{4}/;
 
console.log(validarDatas.test('05/02/2000'));
console.log(validarDatas.test('5/2/21'));
console.log(validarDatas.test('05-02-1999'));
console.log(validarDatas.test('77/15/1000'));
console.log(validarDatas.test('12/12/1999'));
console.log(validarDatas.test('99/99/9999'));
console.log(validarDatas.test('31/02/2000'));
console.log(validarDatas.test('31/02/1950'));
console.log(validarDatas.test('12/07/2001'));
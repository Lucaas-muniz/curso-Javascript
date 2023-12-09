const validaIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

console.log(validaIp.test('127.0.0.1'));
console.log(validaIp.test('asdf'));
console.log(validaIp.test('8.8.8.8'));
console.log(validaIp.test('123.3.4'));
console.log(validaIp.test('adsf 123.4.4.4 32'));
console.log(validaIp.test(' 123.4.4.33'));
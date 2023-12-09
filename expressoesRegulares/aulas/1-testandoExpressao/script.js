let regex1 = /teste/;
const regex2 = new RegExp('testi');
let a = 'ttttestetttt';
let b = 'estedftfg';
let c = 'testi';
let d = '23rftte';

console.log(regex1.test(a));
console.log(regex1.test(d));
console.log(regex1.test(c));
console.log(regex2.test(c));

console.log(/palmeiras/.test('nao tem'));
console.log(/palmeiras/.test('palmeiras'));
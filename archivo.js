const numeros = [10,12,13,15,4,8,12,3];

console.log(numeros);


let meses = new Array();
meses = ['ene','feb','mar','abr',true];
console.log(meses);

console.log(Array.isArray(meses));

console.log(meses[2]);

meses.push('Jun');

console.log(meses);

console.log(meses.indexOf('Jun'));

meses.unshift('Mes 0');

console.log(meses);

///elimianr desde - cantidad de eliminados
meses.splice(2,2);
console.log(meses);
//// concatenar
let a = numeros.concat(meses);

console.log(a);


///ordernar

let b = a.sort();
console.log(b);



















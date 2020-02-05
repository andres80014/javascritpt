
var a = 'a';
let b = 'b';
const c = 'c';


function functionScope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCTION : '+ a,b,c);
}
functionScope();

// Scope de bloque

if(true)
{
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE : '+ a,b,c);
}
console.log('GLOBAL : '+ a,b,c);
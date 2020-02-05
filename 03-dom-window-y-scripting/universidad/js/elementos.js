/// crear enlace
const enlace = document.createElement('a');
//// añadir clase
enlace.className= 'enlace';
////añadir ID
enlace.id = 'nuevo_id';

///añadir HREF
enlace.setAttribute('href','#');

///añadir texto
enlace.textContent = 'nevo enlace';


//agregarlo al html
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);


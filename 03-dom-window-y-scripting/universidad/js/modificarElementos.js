// remplazar  elementos

const nuevoEncabezado = document.createElement('H2');
///Agregar id
nuevoEncabezado.id = 'encabezado';
//agregar texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));
////Elemento anterior sera remplazado


const anterior = document.querySelector('#encabezado');
const elPadre = document.querySelector('#lista-cursos');
elPadre.replaceChild(nuevoEncabezado,anterior);


//eliminar elementos
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

///eliminar directo
//enlaces[0].remove();
navegacion.removeChild(enlaces[0]);





const promerLi = document.querySelector('.enlace');
let elemento;

///////obtener clase - classlist para varias clases

elemento = promerLi.className;

elemento = promerLi.classList.add('nueva-clase');
elemento = promerLi.classList.add('otra-clase');
elemento = promerLi.classList.remove('nueva-clase');
elemento = promerLi.classList;


console.log(promerLi);


console.log(elemento);


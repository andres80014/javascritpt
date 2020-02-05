/*
let elemento;
elemento = document;
elemento = document.all;

elemento = document.head;

elemento = document.body;


elemento = document.URL;
elemento = document.charset;

elemento = document.forms;

elemento = document.forms[0];
elemento = document.forms[0].id;


elemento = document.images;

let imagenes = document.images;

let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(function (imagen) {
    console.log(imagen);
})
console.log(imagenesArr);


*/

/**

let elemento;
elemento  = document.getElementById('hero');
//console.log(elemento);

let encabezado;
encabezado = document.getElementById('encabezado');
encabezado.style.background  ="#333";
encabezado.style.color  ="#FFF";
encabezado.style.padding  ="20px";
encabezado.textContent  ="CAMBIADO";
//console.log(encabezado);

//Query Selector


const encabezadoa =  document.querySelector('#encabezado');


let enlace;
enlace = document.querySelector('#principal a:first-child');

console.log(enlace);

*/
/////////////multiples elementos

let enlaces = document.getElementsByClassName('enlace');


///de collection a array
//console.log(enlaces);

let enlacesa = Array.from(enlaces);

//console.log(enlacesa);


enlacesa.forEach(function (enlace) {
  //  console.log(enlace.textContent);
});


//// QuerySelector all
const enlaceA = document.querySelectorAll('#principal.enlace');
//console.log(enlaceA);
//console.log(enlaceA[2]);


console.log("------------------");

/////traversing

//devuelve los hijos del selector actual
const navegacion = document.querySelector("#principal");
//console.log(navegacion.children);


const barra = document.querySelector(".barra");
//console.log(barra.children[0].children);


const enaces = document.querySelectorAll(".enlace");
console.log(enaces[0].parentElement.parentElement);










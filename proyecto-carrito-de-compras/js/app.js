/// variables
const carrito          = document.getElementById('carrito');
const cursos           = document.getElementById('lista-cursos');
const listaCurso       = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
//listeners
cargarEventListeners();
function cargarEventListeners(){
    ////dispara cunado se presiona agregar carrito
    cursos.addEventListener('click',comprarCurso);

    ////eliminar un curso del carrito
    carrito.addEventListener('click',eliminarCurso);

    // vaciar el carrito
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);

    //
    //contenido cargado
    document.addEventListener('DOMContentLoaded',localStorageListo);
}

//functions

//fincion para añadir cursos al carrito
function comprarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}

function  leerDatosCurso (curso) {
    const infoCurso={
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id')
    };
    insertarCarrito(infoCurso);
}

//mustra el curso seleciconado en el curso
function insertarCarrito(curso) {
    const row  = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}" >X</a></td>
    `;
    listaCurso.appendChild(row);
    agregarLocalStorage(curso);
}

///eliminar un curso del carrito
function eliminarCurso(e){
    e.preventDefault();
    let curso;
    let cursoId;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso =e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarLocalStorage(cursoId);
}
//// vaciar el localStorage
function vaciarCarritoLocalStorage(){
    localStorage.clear();
}

/// vaciar carrito
function vaciarCarrito(e) {
    e.preventDefault();
    //listaCurso.innerHTML = '';
    while(listaCurso.firstChild){
        listaCurso.removeChild(listaCurso.firstChild);
    }
    vaciarCarritoLocalStorage();
    return false;
}


function  agregarLocalStorage(curso) {
    let cursosLS = obtenerTweetLocalStorage();
    cursosLS.push(curso);
    localStorage.setItem('cursos',JSON.stringify(cursosLS));
}

/// comprueba elementos local storage
function obtenerTweetLocalStorage() {
    let cusrsosLS;
    cusrsosLS = localStorage.getItem('cursos');
    if(cusrsosLS === null){
        cusrsosLS = [];
    }
    else{
        cusrsosLS = JSON.parse(cusrsosLS);
    }
    return cusrsosLS;
}


//llenar lo que se encuatra en e localStorege
function localStorageListo(){
    let cursosLS = obtenerTweetLocalStorage();
    cursosLS.forEach(function (curso) {
        //crear elemento y añadir a la lista
        const row  = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}" >X</a></td>
    `;
        listaCurso.appendChild(row);
    });
}

function eliminarLocalStorage(idEliminar) {
    let cursosLS;

    cursosLS = obtenerTweetLocalStorage();
    cursosLS.forEach(function (curso) {
        if(idEliminar===curso.id)
        {

            cursosLS.splice(idEliminar,1);
        }
    });
    console.log(cursosLS);
    localStorage.setItem('cursos',JSON.stringify(cursosLS));


}
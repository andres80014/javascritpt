const txtBtn = document.getElementById('txtBtn').addEventListener('click',cargarTxt);
const  jsonBtn = document.getElementById('jsonBtn').addEventListener('click',cargarJson);
const apiBTN = document.getElementById('apiBTN').addEventListener('click',cargarAPI);
/*
function cargarTxt(){
    fetch('datos.txt')
        .then(function(res){
            return res.text();
        }).then(function (data) {
        document.getElementById('resultado').innerHTML = data;
    }).catch(function (error) {
        document.getElementById('resultado').innerHTML = error;
    });
}
*/
/// con aarrow function

function cargarTxt(){
    fetch('datos.txt')
        .then(res=>res.text())
        .then(data=>document.getElementById('resultado').innerHTML = data)
        .catch(error=>document.getElementById('resultado').innerHTML = error);
}


/*
function cargarJson() {
   fetch('empleaddos.json')
       .then(function (res) {
           return res.json();
       }).then(function (empleados) {
           let html = ''    ;
           empleados.forEach(function (empleado) {
              html+=`<li>${ empleado.nombre } - ${ empleado.puesto}</li>`
           });
       document.getElementById('resultado').innerHTML = html;
   }).catch(function(error){
       document.getElementById('resultado').innerHTML = `<h2>ERROR</h2>`;
   })
}
*/
/*ARROW FUNCTION*/
function cargarJson() {
   fetch('empleados.json')
       .then(res=>res.json())
       .then(empleados=>{
           let html = ''    ;
           empleados.forEach(function (empleado) {
              html+=`<li>${ empleado.nombre } - ${ empleado.puesto}</li>`
           });
       document.getElementById('resultado').innerHTML = html;
   }).catch(error =>
       document.getElementById('resultado').innerHTML = `<h2>ERROR</h2>`
   )
}




function cargarAPI(){
    let url = 'https://uinames.com/api/?amount=25';
    fetch(url)
        .then(resultado=>resultado.json())
        .then(nombres=>{
            let nombreHtml = '';
            nombreHtml=`<ul>`;
            nombres.forEach(function (nombre) {
                nombreHtml +=`<li>${nombre.name}</li>`;
            });
            nombreHtml +=`</ul>`;
            document.getElementById('resultado').innerHTML = nombreHtml;
        })
        .catch(error=>document.getElementById('resultado').innerHTML =error);
}
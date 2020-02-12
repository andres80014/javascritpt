const txtBtn = document.getElementById('txtBtn').addEventListener('click',cargarTxt);
const  jsonBtn = document.getElementById('jsonBtn').addEventListener('click',cargarJson);
const apiBTN = document.getElementById('apiBTN').addEventListener('click',cargarAPI);
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

function cargarAPI(){
    let url = 'https://uinames.com/api/?';
    fetch(url)
        .then(function (resultado) {
            return resultado.json();
        })
        .then(function (nombres) {
            console.log(nombres);
            let nombreHtml = '';
            nombreHtml=`<ul>`;
            nombres.forEach(function (nombre) {
                nombreHtml +=`${nombres .name}`;
            });
            nombreHtml +=`</ul>`;
            document.getElementById('resultado').innerHTML = nombreHtml;
        }).catch(function (error) {
            document.getElementById('resultado').innerHTML =error;
        })
}
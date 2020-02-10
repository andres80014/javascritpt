///
const cargarPost= document.getElementById('cargar').addEventListener('click',cargarElementos);

function cargarElementos(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://jsonplaceholder.typicode.com/posts',true);
    let datos = '';
    xhr.onload = function(){
        if(this.status==200){
            const  respuesta = JSON.parse(this.responseText);

            let datos;
            respuesta.forEach(function (post) {
                datos +=`<h3>${post.title}</h3> <p>${post.body}</p>`
            });
            document.getElementById('listado').innerHTML=datos;
        }
    };
    xhr.send();
}
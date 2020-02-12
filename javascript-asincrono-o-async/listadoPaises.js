const paises= ['colombia','peru','argentina','ecuador'];


//se agrega un nuevo pais despues de 2 segundos
function  nuevoPais(pais,callback) {
    setTimeout(function () {
        paises.push(pais);
        callback();
    },3000);
}

// los paises se mustran despues de un segundo
function monstrarPaises(){
    setTimeout(function(){
        let htmlPaises = '';

        paises.forEach(function (pais) {
           htmlPaises +=`<li>${ pais }</li>`
        });
        document.getElementById('app').innerHTML = htmlPaises;
    },2000)
}

nuevoPais('españa',monstrarPaises);
monstrarPaises();

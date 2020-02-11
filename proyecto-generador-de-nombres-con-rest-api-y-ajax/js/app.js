//2url += 'http://uinames.com/api/?';

document.querySelector('#generar-nombre').addEventListener('submit',generarNombres);

function generarNombres(e){
    e.preventDefault();

    //variables

    const origen = document.getElementById('origen');
    const origenSelect = origen.options[origen.selectedIndex].value;


    const genero = document.getElementById('genero');
    const generoSelect = genero.options[genero.selectedIndex].value;

    const numero = document.getElementById('numero').value;

    xhr = new XMLHttpRequest();

    let url = 'http://uinames.com/api/?';

    if(generoSelect !== ''){
        url += `&gender=${generoSelect}`
    }

    if(origenSelect !== ''){
        url += `&region=${origenSelect}`
    }

    if(numero !== ''){
        url += `&amount=${numero}`
    }

    xhr.open('GET',url,true);
    xhr.onload = function () {
        if(this.status == 200){
            const nombres = JSON.parse(this.responseText);

            let htmlNombres = '<h2>Nombre Generados</h2>';
            htmlNombres +='<ul class="lista">';
            nombres.forEach(function (nombre) {
                htmlNombres +=`<li>Nombre: ${nombre.name}  <br> Genero : ${nombre.gender } <br> Pais : ${ nombre.region}</li>`;
            });
            htmlNombres +='</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }


    };
    xhr.send();
}
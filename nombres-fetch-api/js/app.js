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


    /// crear fetch

    fetch(url)
    .then(function (res) {
        return res.json();
    }).
    then(function (data) {
        let html = '<h2> nombres generados</h2>';
        html +=`<ul class="lista">`;
        data.forEach(function(nombre){
            html +=`<li>${nombre.name}</li>`;
        });
        html +=`</ul>`;
        document.getElementById('resultado').innerHTML=html;
    }).catch(function(error){
      console.log('error');
    })

}
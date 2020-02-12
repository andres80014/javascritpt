// callback en foreach

const ciudades = ['bogota','españa','cali','medelli'];
//inline callback
ciudades.forEach(function (ciudad) {
    console.log(ciudad);
});


//con funcion definida
function muestraCiudades(ciudad){
    console.log(ciudad);
}

ciudades.forEach(muestraCiudades);



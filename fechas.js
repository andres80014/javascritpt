/// en JS  date
const diaHoy = new Date();
console.log(diaHoy);


///fecha en especifico mes dia año

let navidad2017 = new Date('12-25-2017');
console.log(navidad2017);


let valor;
/// mes
valor = diaHoy.getMonth();
console.log(valor);


/// dia calendario
valor = diaHoy.getDate();
console.log(valor);

/// dia semana
valor = diaHoy.getDay();
console.log(valor);


/// año
valor = diaHoy.getFullYear();
console.log(valor);


/// munitos
valor = diaHoy.getMinutes();
console.log(valor);


/// hora
valor = diaHoy.getHours();
console.log(valor);

/// miliseguntos desde  1970
valor = diaHoy.getTime();
console.log(valor);

/// miliseguntos desde  1970
valor = diaHoy.setFullYear(2000);
valor = diaHoy.getFullYear();
console.log(valor);





const pendientes = ['tarea','lavar','planchar','aseo'];

pendientes.forEach(function (pendiente,index) {
    console.log(`${pendiente} : ${index}`);
});



//Map recorrer un arreglo de objetos
const carrito = [
    {id :1,producto:'libro' },
    {id :2,producto:'lapiz' },
    {id :3,producto:'disco' },
    {id :4,producto:'cuaderno' }
];


const nombreProducto = carrito.map(function (carrito) {
    return carrito.producto;
}) ;

console.log(nombreProducto);

/*


/// imprimir con for un objeto

const automovil = {
    modelo : 'Camaro',
    motor : 2.0,
    anio  :2020
};




for(let aut in automovil ){
    console.log(`${aut} : ${automovil[aut]}`)
}


*/

/*
if(confirm("eliminar?")){
    console.log("elimindao");
}
else{
    console.log("nada");
}


let ubicacion;
ubicacion = window.location.port;
console.log(ubicacion);

*/




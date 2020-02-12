// promises

/*
const esperando = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve('se ejecuto');
    },6000)
});


esperando.then(function (mensaje) {
    console.log(mensaje);
});
*/



const aplicarDescuento = new Promise(function (resolve,reject){
    const descuento  = false;
    if(descuento){
        resolve('descuento plicado');
    }
    else{
        resolve('no hay descuento descuento')
    }

});

aplicarDescuento.then(function (resultado) {
   console.log(resultado);
}).catch(function (error) {
    console.log(error);
});



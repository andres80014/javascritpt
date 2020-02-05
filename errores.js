function obtenerClientes(){
    console.log("descargando..... ");

    setTimeout( function () {
     console.log("comppleto");
    },3000);
}


try{
    algo();
}
catch (e) {
    console.log(e);
} finally {
    console.log("No me importa");
}




obtenerClientes();
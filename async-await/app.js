async function obtenerClientes(){
    ///se crea el promise
    const clientes = new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve('Clients descargados');
      },4000);
    });
    const error = false;

    if(!error){
        const respuesta = await clientes;
        return respuesta;
    }
    else{
        await Promise.reject(`Hubo un error`);
    }
}


obtenerClientes()
.then(res=>console.log(res))
.catch(error=>console.log('error'));
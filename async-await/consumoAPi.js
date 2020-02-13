async function leerTodos(){

    /// esperar respiesta
    const respuesta = await fetch('http://jsonplaceholder.typicode.com/posts', {
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    });

    // procede aunado la respuesta este echa
    const datos = await respuesta.json();

    console.log(datos);
    return datos;

}

leerTodos()
    .then(usuarios=>console.log(usuarios))
    .catch(error=>console.log('error'));
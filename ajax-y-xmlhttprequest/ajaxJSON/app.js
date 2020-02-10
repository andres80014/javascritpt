//

const boton1 = document.getElementById('boton1').addEventListener('click',function () {


    const xhr = new  XMLHttpRequest();
   xhr.open('GET','empleado.json',true);
    /// una vez que carga
    xhr.onload = function(){
        /// 200: correct, 403: request prohibido, 404 no encontrado
         if(this.status==200){
            const persona = JSON.parse(this.responseText);
            const respuesta = `<ul> 
                                <li>Nombre : ${persona.nombre} </li> 
                                <li>Empresa : ${persona.empresa} </li>
                                <li>Persona : ${persona.trabajo}</li> 
                                </ul>`;

            const  div = document.getElementById('empleado').innerHTML=respuesta;
        }
    };
    xhr.send();


});
//informacion desde un .txt

document.getElementById('cargar').addEventListener('click',cargarDatosOtro);


function cargarDatos(){

    //crear el objeto XML
    const  xrh = new XMLHttpRequest();

    // abrir conexion
    xrh.open('GET','datos.txt',true);

    /// una vez que carga
    xrh.onload = function(){
        /// 200: correct, 403: request prohibido, 404 no encontrado
        if(this.status==200){
            document.getElementById('listado').innerHTML=`<h1> ${ this.responseText}</h1>`;
        }
    };

    /// enviar el requst
    xrh.send();
}


function cargarDatosOtro(){

    //crear el objeto XML
    const  xrh = new XMLHttpRequest();

    // abrir conexion
    xrh.open('GET','datos.txt',true);

    xrh.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
        }
    };
    //ready states
    //  0: no inicializado
    // 1: conexion establecida
    // 2: recibido
    // 3: Procesado
    // 4 respuesta lista
    /// enviar el requst
    xrh.send();
}
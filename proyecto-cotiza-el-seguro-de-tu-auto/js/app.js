//* Constructor para seguro con prototypes.................

function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;

}
Seguro.prototype.cotizarSeguro = function(seguro){

    /*
    1=americano = 1.15
    2=asiatico = 1.05
    3=europeo  = 1.35
     * */

    let cantidad;
    const base  =2000;

    switch (this.marca) {
        case '1':
            cantidad = base*1.15;
            break;

        case '2':
            cantidad = base*1.05;
            break;

        case '3':
            cantidad = base*1.35;
            break;
    }
    /*diferencia entre el año seleccionado y la fecha actual */
    /*cada año de diferencia es -3% */
    const diferenciaAnio = new Date().getFullYear() - this.anio;

    cantidad -=((diferenciaAnio*3) * cantidad /100);
    if(this.tipo ==='basico'){
        cantidad *= 1.30;
    }
    else if(this.tipo === 'completo'){
        cantidad *= 1.50;
    }
    return cantidad;
};



// Todos lo que se muentra
function Interfaz() {
    //mensaje que ese imprimi en el HTML
    Interfaz.prototype.mostrarError = function (msj, tipoError) {

        const div = document.createElement('div');
        if(tipoError == 'error'){
            div.classList.add('error','mensaje');
       }
        else{
            div.classList.add('correcto','mensaje');
        }
        div.innerHTML=`${msj}`;
        formulario.insertBefore(div,document.querySelector('.form-group'));
        setTimeout(function(){
            document.querySelector('.mensaje').remove();
        },3000);
    }
}

/// imprime el reusltado de la cortizacion

Interfaz.prototype.mostrarResultado = function (seguro,cantidad) {
    const  resultado = document.getElementById('resultado');


    let marca;
    switch (seguro.marca) {
        case '1':
            marca = 'Americano';
            break;

        case '2':
            marca = 'Asiatico';
            break;

        case '3':
            marca = 'Europeo';
            break;

    }
    const  div =document.createElement('div');
    div.innerHTML =`<p class="header">Tu resumen </p>El seguro para el vehivulo marca : ${ marca } año ${seguro.anio } para seguro tipo ${seguro.tipo} tiene un costo de: ${cantidad}` ;

    const spiner = document.querySelector('#cargando img');
    spiner.style. display = 'block';
    setTimeout(function(){
        resultado.appendChild(div);
        spiner.style.display = 'none';
    },2000);


};

///event listener

const formulario  =document.getElementById('cotizar-seguro');
formulario.addEventListener('submit',function(e){
    e.preventDefault();


    const marca = document.getElementById('marca');
    const marcaSelecionada = marca.options[marca.selectedIndex].value;

    const anio = document.getElementById('anio');
    const anioSelecionado = anio.options[anio.selectedIndex].value;

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //// crear una instancia de interfaz

    const interfaz = new Interfaz();

    // revisamos los campos vacios
    if(marcaSelecionada==='' || anioSelecionado==='' || tipo===''){
            interfaz.mostrarError('Faltan datos','error');
    }
    else{

        //limpiar resultado anteriores
        const resultados = document.querySelector('#resultado div');
        if(resultados !=null){
            resultados.remove();
        }
        //instanciar seguro
        const seguro = new Seguro(marcaSelecionada,anioSelecionado,tipo);
        const cantidad = seguro.cotizarSeguro(seguro);

        // mostar el resultado
        interfaz.mostrarResultado(seguro,cantidad);
        interfaz.mostrarError('Cotizando','exito');

    }

});

const max = new Date().getFullYear();
const min = max-20;

const selectAnios = document.getElementById('anio');

for(let i = max; i>=min;i--){
    let options = document.createElement('option');
    options.value = i;
    options.innerHTML = i;
    selectAnios.appendChild(options);

}

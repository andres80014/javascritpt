//* Constructor para seguro

function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;

}

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
        //instanciar seguro
        const seguro = new Seguro(marcaSelecionada,anioSelecionado,tipo);
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

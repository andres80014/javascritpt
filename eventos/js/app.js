// instanciar ambas clases
const eventbrite = new EventBrite();
const ui  = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click',(e) =>{
   e.preventDefault();

   //leer el text del input
    const texto = document.getElementById('evento').value;

    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    if(texto !==''){
        console.log("Entra");
    }
    else
    {
        console.log("Entra");
        ui.mostrarMensaje('Escribe algo','alert alert-danger mt-4');
    }
});
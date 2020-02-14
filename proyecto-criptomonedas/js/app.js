const cotizador = new ApiCripto('174dfce289758f8ba64a052760850936487e66cb9c7d24fecf23368e0781c947');
const ui = new InterfazUi();


const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const monedaSel = document.querySelector('#moneda');
    const mondedaSelect = monedaSel.options[monedaSel.selectedIndex].value;

    const criptomonedaSel = document.querySelector('#criptomoneda');
    const criptomonedaSelect = criptomonedaSel.options[criptomonedaSel.selectedIndex].value;

    // comprobar que ambos campo no vacios

    if(mondedaSelect==='' || criptomonedaSelect===''){
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    }
    else{
        console.log("conultar APO");
    }

});


/*


*
 */
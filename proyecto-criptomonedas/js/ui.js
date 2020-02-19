class InterfazUi{

    constructor(){
        this.init();
    }
    init(){
        this.construiurSelect();
    }
    mostrarMensaje(msj,clase){
        const div  =document.createElement('div');
        div.className=clase;
        div.appendChild(document.createTextNode(msj));
        console.log(div);

        const divMensaje  =document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },3000);
    }

    construiurSelect(){
        cotizador.obtenerMonedeasAPI()
            .then(monedas=>{

                const selectCriptomoneda = document.querySelector('#criptomoneda');
                //itera el resultado
                for(const [key,value] of Object.entries(monedas.monedas.Data)){
                    //añador el symbol y nombre a las opciones del select
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    selectCriptomoneda.appendChild(opcion);
                }
            })
    }

    mostrarResultado(resultado,moneda,criptomoneda){
        // en caso de reusltado anterior ocultar

        const Anterior =  document.querySelector('#resultado > div ');
        if(Anterior){
            Anterior.remove();
        }
        const datoMoneda  = resultado[criptomoneda][moneda];
        const precio = datoMoneda.PRICE.toFixed(2);
        const variacion =datoMoneda.CHANGEPCTDAY.toFixed(2);
        const actualizado = new  Date(datoMoneda.LASTUPDATE*1000).toLocaleString();
        //construir el template
        let templateHtml = `<div class="card bg-warning"> 
                                <div class="card-body text-light">
                                    <h2 class="card-title">Resultado:</h2>
                                    <p>El precio ${datoMoneda.FROMSYMBOL} a moneda ${datoMoneda.TOSYMBOL} es de: $ ${ precio }</p>
                                    <p>Variacion ultimo dia % ${variacion}</p>
                                    <p>Ultima actualizacion ${actualizado}</p>
                                </div>
                            </div>`;
        this.mostrarOcularSpinner('block');
        /// insertear el resultado

        setTimeout(()=>{
            document.querySelector('#resultado').innerHTML = templateHtml;
            this.mostrarOcularSpinner('none');

        },3000);

    }

    //mostra epiner de carga
    mostrarOcularSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display=vista;
    }
}
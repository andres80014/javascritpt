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
}
/// variables
const presupuestoInicial = prompt("Cual es su presupuesto?");
const formulario  = document.getElementById('agregar-gasto');

let cantidadPresupuesto;

//clases

class Presupuesto{
    constructor(){
        this.presupesto = Number(presupuestoInicial);
        this.restante   = Number(presupuestoInicial);
    }
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }

}


class Interfaz{

    insertarPresupuesto(cantidad){
        const presupuestoSpam = document.getElementById('total');
        const restanteSpam = document.getElementById('restante');

        presupuestoSpam.innerHTML =`${cantidad}`;
        restanteSpam.innerHTML =`${cantidad}`;

    }

    imprimirMensaje(mensaje,tipo){
        const divMesanje = document.createElement('div');
        divMesanje.classList.add('text-center','alert');
        if(tipo==='error'){
            divMesanje.classList.add('alert-danger');
        }
        else{
            divMesanje.classList.add('alert-success');
        }
        divMesanje.appendChild(document.createTextNode(mensaje));
        ///insertar en el DOM
        document.querySelector('.primario').insertBefore(divMesanje,formulario);

        setTimeout(function () {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        },2000)
    }

    agregarGasto(nombreGasto,cantidadGasto){

        const listaGastos = document.querySelector('#gastos ul');
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${nombreGasto} 
        <spam class="badge badge-primary badge-pill"> $ ${cantidadGasto} </spam>`;
        listaGastos.appendChild(li);
    }

    /*comprueba ekl presupuesto restante*/
    presupuestoRestante(cantidad){
        const restante = document.querySelector('#restante');
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML = `${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();


    }

    comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.presupesto;
        const restanteTotal = cantidadPresupuesto.restante;

        ///comprobar 25% del gasto total
        if((presupuestoTotal/4) > restanteTotal) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success','alert-warning');
            restante.classList.add('alert-danger');
        }
        else if((presupuestoTotal/2) > restanteTotal){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }


}
////listeners
document.addEventListener('DOMContentLoaded',function(){
    if(presupuestoInicial===null || presupuestoInicial ===''){
        window.location.reload();
    }
    else{
        cantidadPresupuesto = new Presupuesto(presupuestoInicial);

        ////instanciar la clase Interfaz
        interfaz = new Interfaz();
        interfaz.insertarPresupuesto(cantidadPresupuesto.presupesto);

    }
});

formulario.addEventListener('submit',function(e){
    e.preventDefault();

    const nombreGasto = document.getElementById('gasto').value;
    const cantidadGasto  = document.getElementById('cantidad').value;

    const interfaz = new Interfaz();

    //comprobar que no sean vacioan

    if(nombreGasto==='' || cantidadGasto===''){
        //msj y tipo de error
        interfaz.imprimirMensaje("hubo un error",'error');
    }
    else{
        interfaz.imprimirMensaje("Correcto",'correcto');
        interfaz.agregarGasto(nombreGasto,cantidadGasto);
        interfaz.presupuestoRestante(cantidadGasto);
    }

});





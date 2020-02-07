//object literl
// this lee parametros del mismo objeto
const cliente = {
    nombre : 'juan',
    saldo :200,
    tipoCliente:function(){
        let tipo;
        if(this.saldo>1000){
            this.tipo = 'Gold'
        }
        else{
            this.tipo = 'Normal'
        }
        return this.tipo;
    }
};

//console.log(cliente.tipoCliente());


//metodo alternativo

function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo  = saldo;
    this.tipoCliente = function(){
        let tipo;
        if(this.saldo>1000){
            tipo = 'Gold'
        }
        else{
            tipo = 'Normal'
        }
        return tipo;
    }
}


const persona = new Cliente('pedro',2000);
console.log(persona);


//// String


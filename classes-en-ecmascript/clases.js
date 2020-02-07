class Cliente{
    constructor (nombre,apellido,saldo){

        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    imprimirSaldo = function () {
        return `Hola ${this.nombre} tu saldo es : ${this.saldo}`;
    };

    tipoCliente = function(){
        let tipo;
        if(this.saldo>1000){
            tipo = "GOLD"
        }
        else{
            tipo = "normal";
        }
        return tipo;
    };

    retitarSaldo(retiro){
        return this.saldo -=retiro;
    }

    static bienvenida(){
        return `Bienvenro al cajero`;
    }
}


const cliente1   = new Cliente('Maria','Perez',12000);

console.log(Cliente.bienvenida());
console.log(cliente1.imprimirSaldo());
console.log(cliente1.tipoCliente());
cliente1.retitarSaldo(1500);
console.log(cliente1.imprimirSaldo());




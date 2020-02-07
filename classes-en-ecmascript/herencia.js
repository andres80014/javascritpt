class Cliente{
    constructor (nombre,saldo){

        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo = function () {
        return `Hola ${this.nombre} tu saldo es : ${this.saldo}`;
    };

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,tipo){
        /// va al constructor padre
        super(nombre,saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
    static bienvenida(){
        return `Bienvenro al cajero pare empresas`;
    }
}


/*
const empresa = new Empresa('empresa1','5000','4353035','construccion');

console.log(empresa.imprimirSaldo());

 */

console.log(Empresa.bienvenida());

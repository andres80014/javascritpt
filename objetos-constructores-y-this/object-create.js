//object-create

const  Cliente =  {
    imprimirSaldo : function (){
        return `Hola ${this.nombre} su saldo es: ${this.saldo}`
    },
    retirarSaldo : function (retiro){
        return this.saldo =-retiro;
    },
};


// crear el objeto

const  mary = Object.create(Cliente);
mary.nombre = 'mary';
mary.saldo = 1000;
mary.retirarSaldo(300);
console.log(mary);
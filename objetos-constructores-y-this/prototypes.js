function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}

//// crear prototype
Cliente.prototype.tipoCliente  = function(){
        let tipo;
        if(this.saldo>1000){
            tipo = 'Gold'
        }
        else{
            tipo = 'Normal'
        }
        return tipo;
    };
/// prototipo que imprime
Cliente.prototype.clienteSaldo = function () {
    return`Nombre : ${this.nombre}, Tu saldo es ${this.saldo} `;
};

//retirar Saldo
Cliente.prototype.retirarSaldo = function (retiro) {
    return this.saldo -=retiro;
};


const cliente1 = new Cliente('juan', 5000);
cliente1.retirarSaldo(100);
console.log(cliente1.clienteSaldo());




function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}

/// prototipo que imprime
Cliente.prototype.clienteSaldo = function () {
    return`Nombre : ${this.nombre}, Tu saldo es ${this.saldo} `;
};

/// banca para empresas
function Empresa(nombre,saldo,telefono,tipo){

    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;
    this.tipo     = tipo;
}

//const cliente1 = new Cliente('juan', 5000);

Empresa.prototype = Object.create(Cliente.prototype);

const  empresa = new  Empresa('udemy','10000','5454','educacion');

console.log(empresa.clienteSaldo());



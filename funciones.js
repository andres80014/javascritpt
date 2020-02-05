function  saludo(a=12) {
    console.log("HOLA"+`${a}`);
}

//saludo("WWWW");

const suma = function (a,b) {
    return  a+b;
};

//console.log(suma(1,2));

(function () {
console.log("crea un IIFE");
})();


(function (a,b) {
    console.log("crea un IIFE parametros"+a +` ${b}`);
})(1,2);


const musica = {
    reproducir : function(id) {
        console.log("reproduciondo musica "+` ${id}`);
    },
    pausa : function() {
        console.log("pausa musica ");
    }
};

 //// crear metodo fuera del objeto

musica.borrar = function (id) {
    console.log("borrando musica "+`${id}`);
};


musica.reproducir(30);
musica.pausa();
musica.borrar(20);

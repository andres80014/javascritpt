const persona = {
    nombre : "andres",
    apellido :"vaca",
    numero :38,
    array: ['rock','pop','tecno'],
    hogar:{
        pais : 'colombia',
        departamento : 'cundinamarca',
        ciudad : 'bogota'
    },
    fechaCumple : function(){
        return new Date().getFullYear() - 38;
    },
    fechaCumpleCalculada : function(){
        return new Date().getFullYear() - this.numero;
    },
};

/*
console.log(persona);

console.log(persona.nombre);

console.log(persona.array[1]);
persona.array.push('popular');
*/


//console.log(persona.fechaCumpleCalculada());

//arreglo de objetos

const autos =[
    { modelo:'mustang',motor:'6.0' },
    { modelo:'dacia',motor:'3.0' },
    { modelo:'camaro',motor:'4.0' }
];

for (let i= 0; i< autos.length;i++){
    console.log(autos[i]);
}
autos[1] = {modelo:'renault', motor:'1.1'};

for (let i= 0; i< autos.length;i++){
    console.log(autos[i]);
}



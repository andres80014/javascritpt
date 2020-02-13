aprendiendo =() =>{
    console.log("ingresa");
};


// una linea  no requiere llaves
aprendiendo1=()=>console.log("una linea");


//retorna valor
aprendiendo1=()=>"una linea";
console.log(aprendiendo1());
//retorna objeto
aprendiendo1=()=>({aprendiendo: "una linea"});
console.log(aprendiendo1());

//enviando parametros  objeto
aprendiendo1=(tecnologia)=>console.log(`Aprendiendo ${tecnologia}`);
aprendiendo1('Javascript');

//pasando un parametro
aprendiendo1=tecnologia=>console.log(`Aprendiendo ${tecnologia}`);
aprendiendo1('JS');


//pasando mas de 1 parametro
aprendiendo1=(tecnologia,tecnologia2 )=>console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
aprendiendo1('JS','JAVA');

// forma tradicional de usar callback
const productos = ['disco','camisa','gitarra'];
const cantProductos = productos.map(function(producto){
    return producto.length;
});

console.log(cantProductos);


// forma arrow de usar callback

const letrasProductos = productos.map((producto) => {  return producto.length; });
console.log(cantProductos);


// for tradicional
productos.forEach(function (prod) {
    console.log(prod);
});


//for arrow function vs 1
productos.forEach(prod =>{
    console.log(prod);
});



//for arrow function vs2
productos.forEach(prod => console.log(prod));

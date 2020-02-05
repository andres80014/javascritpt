///click
/*
document.querySelector('#submit-buscador').addEventListener('click',function(event)
{
    event.preventDefault();
    alert("ocion 1") ;
});
*/

document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton);


function ejecutarBoton(event){
    event.preventDefault();
  let elemento;
  elemento = event.target;
  elemento = event.target.id;
    elemento = event.target.className;

  console.log(elemento);
}

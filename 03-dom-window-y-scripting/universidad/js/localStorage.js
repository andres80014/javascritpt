//agregar a localstorage

localStorage.setItem('nombre','Jose Andres');

sessionStorage.setItem('apellido','Vaca');


console.log(localStorage.getItem('nombre'));


sessionStorage.removeItem('apellido');

//limpia el localStorage
localStorage.clear();
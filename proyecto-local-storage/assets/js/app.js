
////variables
const listaItems = document.getElementById("lista-tweets");




//Event Listener
eventListeners();
function eventListeners() {
    //cuando se envia al formaulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //cuando se boorar tweets
    document.querySelector('#lista-tweets').addEventListener('click', eliminarTweet);

    //contenido cargado
    document.addEventListener('DOMContentLoaded',localStorageListo);
}



//functions
function agregarTweet(e){
    e.preventDefault();
    // leer el valor de text area
    const tweet = document.getElementById('tweet').value;
    /// crear boton de eliminar

    const botonEliminar = document.createElement('a');
    botonEliminar.classList = "borrar-tweet";
    botonEliminar.innerText = "X";

    //crear elemento y añadir a la lista
    const  li = document.createElement('li');
    //adicionar texto a li
    li.innerText = tweet;

    /// añade el boton de tweet
    li.appendChild(botonEliminar);

    //adicionar li a listado
    listaItems.appendChild(li);
    document.getElementById('tweet').value = "";

    // añadir a local storage
    agregarTweetLocalStorage(tweet);
}


function eliminarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        eliminarTweetLocalStorage(e.target.parentElement.textContent);
    }
}

function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetLocalStorage();
    tweets.push(tweet);
    //// convertir de string a arreglo para local Storage
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

/// comprueba elementos local storage
function obtenerTweetLocalStorage() {
    let tweets;
    tweets = localStorage.getItem('tweets');
    if(tweets === null){
        tweets = [];
    }
    else{
        tweets = JSON.parse(tweets);
    }
    return tweets;
}


function localStorageListo()
{
    let tweets;
    tweets = obtenerTweetLocalStorage();
    tweets.forEach(function(tweet){
        const botonEliminar = document.createElement('a');
        botonEliminar.classList = "borrar-tweet";
        botonEliminar.innerText = "X";

        //crear elemento y añadir a la lista
        const  li = document.createElement('li');
        //adicionar texto a li
        li.innerText = tweet;

        /// añade el boton de tweet
        li.appendChild(botonEliminar);

        //adicionar li a listado
        listaItems.appendChild(li);
    });
}
//eliminar tweet local storage
function eliminarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;

    //elimina la X
    tweetBorrar = tweet.substr(0,tweet.length - 1);

    tweets = obtenerTweetLocalStorage();
    tweets.forEach(function (tweet,index) {
            if(tweetBorrar===tweet){
                tweets.splice(index,1);
            }
    });


    localStorage.setItem('tweets',JSON.stringify(tweets));
}





class Interfaz{
    constructor() {
        this.init();

        //leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    // metodo para iniciar app
    init(){
        this.imprimirCategorias();
    }

    imprimirCategorias2(){

    }
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;

                // seelcionae le select de categorias
                //listado-categorias
                const  selectCategoria =document.getElementById('listado-categorias');
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name));
                    selectCategoria.appendChild(option);
                })

            })
    }

    mostrarMensaje(msj,clases)
    {
        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(msj));
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        setTimeout(()=>{
            this.limpiaMensaje();
        },3000)
    }


    limpiaMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}
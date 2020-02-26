class EventBrite{
    constructor() {
        this.token_auth = 'CYPJ7TXWKXLBB5WPDFMD';
        this.ordenar = 'date';
    }


    async obtenerCategorias(){
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        // esperar respuesta devolver json
        const categorias  = await respuestaCategorias.json();
        return  {
            categorias
        };
    }
}
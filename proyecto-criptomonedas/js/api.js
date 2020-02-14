class ApiCripto{
    constructor(apikey){
        this.apikey = apikey;
    }


    async obtenerMonedeasAPI(){
        const url  = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        const ulrObtenerMonedas = await fetch(url);


        // respuesta en JSON
        const monedas = await ulrObtenerMonedas.json();

        return {
            monedas
        }
    }
}
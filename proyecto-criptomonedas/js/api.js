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

    async obtenerValores(moneda,criptomoneda){
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        //consultar en rest api

        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();
        return { resultado }
    }
}
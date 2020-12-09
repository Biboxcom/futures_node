const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

subscribeMarketPrice = () => {
    client.subscribeMarketPrice( "BTC_USD", ( data ) => {
        console.log(  data );
    } );
};
subscribeMarketPrice();

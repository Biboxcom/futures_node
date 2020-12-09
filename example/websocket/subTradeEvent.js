const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

subscribeTrade = () => {
    client.subscribeTrade( "BTC_USD", ( data ) => {
        console.log( data[0] );
    } );
};
subscribeTrade();

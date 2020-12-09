const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

subscribeTicker = () => {
    client.subscribeTicker( "BTC_USD", ( data ) => {
        console.log( data );
    } );
};
subscribeTicker();

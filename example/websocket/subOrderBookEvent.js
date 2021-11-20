const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

subscribeOrderBook = () => {
    client.subscribeOrderBook( "BTC_USD", ( data ) => {
        console.log( "BTC ask1", data.asks[0] );
        console.log( "BTC bid1", data.bids[0] );
    } );

};
subscribeOrderBook();

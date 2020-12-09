const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

getOrderBook = async () => {
    try {
        let res = await client.getOrderBook( "BTC_USD", 200 );
        console.log( res );
    } catch ( e ) {
        console.log( e );
    }
};
getOrderBook();

const { BiboxFuturesClient, TimeInterval } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

getCandlestick = async () => {
    try {
        let res = await client.getCandlestick( "BTC_USD", TimeInterval.DAILY, 10 );
        console.log( res );
    } catch ( e ) {
        console.log( e );
    }
};
getCandlestick();

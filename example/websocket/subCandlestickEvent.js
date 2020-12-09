const { BiboxFuturesClient, TimeInterval } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

subscribeCandlestick = () => {
    client.subscribeCandlestick( "BTC_USD", TimeInterval.ONE_MINUTE, ( data ) => {
        console.log( "BTC_USD", data );
    } );

    client.subscribeCandlestick( "ETH_USD", TimeInterval.ONE_MINUTE, ( data ) => {
        console.log( "ETH_USD", data );
    } );
};
subscribeCandlestick();

const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

subscribeTrade = () => {
    client.subscribeTrade( "BTC_USD", ( data ) => {
        console.log( data );
        // {
        //     symbol: '5BTC_USD',
        //     side: 'SHORT',
        //     price: '18340.1',
        //     quantity: '7875',
        //     time: 1607583162936
        // }
    } );

};
subscribeTrade();

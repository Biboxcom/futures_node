const { BiboxFuturesClient, TimeInterval } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

subscribeCandlestick = () => {

    client.subscribeCandlestick( "ETH_USD", TimeInterval.ONE_MINUTE, ( data ) => {
        console.log( "ETH_USD", data );
        // [
        // {
        //     time: 1607582880000,
        //     open: '562.9',
        //     high: '562.9',
        //     low: '562.48',
        //     close: '562.57',
        //     volume: '212092'
        // }...
        // ]
    } );

};
subscribeCandlestick();

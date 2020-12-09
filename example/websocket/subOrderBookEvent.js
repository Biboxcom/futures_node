const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

subscribeOrderBook = () => {
    client.subscribeOrderBook( "BTC_USD", ( data ) => {
        console.log( "BTC ask1", data.asks[0] );
        console.log( "BTC bid1", data.bids[0] );
    } );

    client.subscribeOrderBook( "ETH_USD", ( data ) => {
        console.log( "ETH ask1", data.asks[0] );
        console.log( "ETH bid1", data.bids[0] );
    } );

    client.subscribeOrderBook( "LINK_USD", ( data ) => {
        console.log( "LINK ask1", data.asks[0] );
        console.log( "LINK bid1", data.bids[0] );
    } );

    client.subscribeOrderBook( "EOS_USD", ( data ) => {
        console.log( "EOS ask1", data.asks[0] );
        console.log( "EOS bid1", data.bids[0] );
    } );
};
subscribeOrderBook();

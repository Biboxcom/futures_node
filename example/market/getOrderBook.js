const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

getOrderBook = async () => {
    try {
        let res = await client.getOrderBook( "BTC_USD", 200 );
        console.log( res );
        // {
        //     symbol: '5BTC_USD',
        //     updateTime: 1607581724243,
        //     asks: [
        //     { price: '18298.5', amount: '5050' },
        //     { price: '18298.6', amount: '805' },
        //     ...
        //     ],
        //     bids: [
        //     ....
        //     ]
        // }

    } catch ( e ) {
        console.log( e );
    }
};
getOrderBook();

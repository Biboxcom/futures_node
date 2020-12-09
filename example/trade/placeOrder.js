const { BiboxFuturesClient, TradeSide, TradeAction  } = require( "../../biboxFuturesClient" );
const apiKey = "2038c3a2d4c1d0a38394c8e7472578557d054111";
const secretKey = "4dafc3c1d18a6f9dff293cf59e732f7617637111";
const client = new BiboxFuturesClient( apiKey, secretKey );

placeOrder = async () => {
    try {
        let orderId1 = await client.placeMarketOrder( {
            symbol: "BTC_USD",
            quantity: 1,
            tradeSide: TradeSide.LONG,
            tradeAction: TradeAction.ENTRY
        } );
        console.log( orderId1 );
        let orderId2 = await client.placeLimitOrder( {
            symbol: "ETH_USD",
            quantity: 1,
            price: 490,
            tradeSide: TradeSide.LONG,
            tradeAction: TradeAction.ENTRY
        } );
        console.log( orderId2 );
    }catch ( e ) {
        console.log( e );
    }
};
placeOrder();


















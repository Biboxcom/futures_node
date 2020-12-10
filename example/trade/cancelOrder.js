const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const apiKey = "2038c3a2d4c1d0a38394c8e7472578557d054111";
const secretKey = "4dafc3c1d18a6f9dff293cf59e732f7617637111";
const client = new BiboxFuturesClient( apiKey, secretKey );

cancelOrder = async () => {
    try {
        await client.cancelOrder( "28587322968618" );
        // await client.cancelAllOrders( "ETH_USD" );
        // await client.cancelOrders( [ 28587322968618 ] );

    }catch ( e ) {
        console.log( e );
    }
};
cancelOrder();



















const { BiboxFuturesClient, TradeSide } = require( "../../biboxFuturesClient" );
const apiKey = "2038c3a2d4c1d0a38394c8e7472578557d054111";
const secretKey = "4dafc3c1d18a6f9dff293cf59e732f7617637111";
const client = new BiboxFuturesClient( apiKey, secretKey );
getPositions = async () => {
    try {
        let ps = await client.getPositions( null, TradeSide.LONG );
        console.log( ps );
        let ethPs = await client.getPositions( "ETH_USD" );
        console.log( ethPs );

    }catch ( e ) {
        console.log( e );
    }
};
getPositions();

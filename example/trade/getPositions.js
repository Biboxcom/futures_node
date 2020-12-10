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
        // [
        //     {
        //         symbol: '5BTC_USD',
        //         positionMargin: '0.0000007926',
        //         marginCallPrice: '17851.1851131589',   // 告警价格
        //         liquidationPrice: '17764.6904251239',  // 爆仓价格
        //         marginMode: 'CROSS',                   // 仓位模式
        //         side: 'LONG',
        //         leverage: '149',
        //         entryPrice: '18321.3435407645',        // 开仓价格
        //         currentQty: '2',                       // 当前仓位
        //         closableQty: '2',                      // 可平仓位
        //         userId: 11966257
        //     },...
        // ]

    }catch ( e ) {
        console.log( e );
    }
};
getPositions();

const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

getContractInfos = async () => {
    try {
        let contractInfos = await client.getContractInfos();
        console.log( contractInfos );

        let contractInfo = await client.getContractInfo( "BTC_USD" );
        console.log( contractInfo );
        //     {
        //         symbol: '5BTC_USD',
        //         indexPrice: '18329.1557395900', //指数价格
        //         markPrice: '18331.5980995923',  // 标记价格
        //         time: 1607581378000,
        //         fundingRate: '0.0005330000'     // 资金费率
        //     }

    } catch ( e ) {
        console.log( e );
    }
};
getContractInfos();
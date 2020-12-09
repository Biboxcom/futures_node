const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

getContractInfos = async () => {
    try {
        let contractInfos = await client.getContractInfos();
        console.log( contractInfos );

        let contractInfo = await client.getContractInfo( "BTC_USD" );
        console.log( contractInfo );
    } catch ( e ) {
        console.log( e );
    }
};
getContractInfos();
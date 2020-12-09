const { BiboxFuturesClient } = require( "../../biboxFuturesClient" );
const client = new BiboxFuturesClient();

getContracts = async () => {
    try {
        let contracts = await client.getContracts();
        console.log( contracts );
        let contract  = await client.getContract( "BTC_USD" );
        console.log( contract );
    } catch ( e ) {
        console.log( e );
    }
};
getContracts();

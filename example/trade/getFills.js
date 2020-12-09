const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
const apiKey = "2038c3a2d4c1d0a38394c8e7472578557d054111";
const secretKey = "4dafc3c1d18a6f9dff293cf59e732f7617637111";
const client = new BiboxFuturesClient( apiKey, secretKey );

getFills = async () => {
    try {
        let fills = await client.getFills( "35184377957292" );
        console.log( fills );
    }catch ( e ) {
        console.log( e );
    }
};
getFills();

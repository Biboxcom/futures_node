const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
const apiKey = "2038c3a2d4c1d0a38394c8e7472578557d054111";
const secretKey = "4dafc3c1d18a6f9dff293cf59e732f7617637111";
const client = new BiboxFuturesClient( apiKey, secretKey );

getOrders = async () => {
    try {
        let order = await client.getOrder( "35184377957292" );
        console.log( order );
        let orders = await client.getOrders( [ "35184377957292", "39582455765897" ] );
        // let orders = await client.getOrdersByClientOids( [ "1112223333", "123132124312" ] );
        console.log( orders );
        let history = await client.getOrdersByPage();
        console.log( history );

    }catch ( e ) {
        console.log( e );
    }
};
getOrders();

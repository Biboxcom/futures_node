const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
const apiKey = "your apiKey";
const secretKey = "your secretKey";
const client = new BiboxFuturesClient( apiKey, secretKey );

subscribeOrder = () => {
    client.subscribeOrder(  ( data ) => {
        console.log( data );
        // []
    } );
};
subscribeOrder();

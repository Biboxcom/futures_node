const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
const apiKey = "your apiKey";
const secretKey = "your secretKey";
const client = new BiboxFuturesClient( apiKey, secretKey );

subscribePosition = () => {
    client.subscribePosition(  ( data ) => {
        console.log( data );
        // []
    } );
};
subscribePosition();

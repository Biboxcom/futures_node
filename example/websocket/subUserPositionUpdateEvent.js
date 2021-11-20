const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
const apiKey = "your apiKey";
const secretKey = "your secretKey";
const client = new BiboxFuturesClient( apiKey, secretKey );

subscribePositionUpdate = () => {
    client.subscribePositionUpdate(  ( data ) => {
        console.log( data );
        // []
    } );
};
subscribePositionUpdate();

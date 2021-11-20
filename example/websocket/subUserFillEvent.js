const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
const apiKey = "your apiKey";
const secretKey = "your secretKey";
const client = new BiboxFuturesClient( apiKey, secretKey );

subscribeFill = () => {
    client.subscribeFill(  ( data ) => {
        console.log( data );
        // []
    } );
};
subscribeFill();

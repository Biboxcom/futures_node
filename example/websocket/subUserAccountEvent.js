const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
const apiKey = "your apiKey";
const secretKey = "your secretKey";
const client = new BiboxFuturesClient( apiKey, secretKey );

subscribeAccount = () => {
    client.subscribeAccount(  ( data ) => {
        console.log( data );
        // {
        //  LTC:{
        //     asset: 'LTC',
        //     available: '0.198015884', // 可用
        //     orderMargin: '0',         // 挂单冻结
        //     positionMargin: '0'       // 仓位保证金
        //  },...
        // }
    } );

};
subscribeAccount();



















const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
const apiKey = "2038c3a2d4c1d0a38394c8e7472578557d054111";
const secretKey = "4dafc3c1d18a6f9dff293cf59e732f7617637111";
const client = new BiboxFuturesClient( apiKey, secretKey );

getOrders = async () => {
    try {
        let order = await client.getOrder( "35184377957292" );
        console.log( order );
        // {
        //     clientOrderId: 0,
        //     orderId: 35184377957292,
        //     symbol: '5ETH_USD',
        //     price: '479.2200000000',
        //     quantity: '10.0000000000',    // 挂单数量
        //     orderMargin: '0.0000000000',
        //     avgPrice: '472.6900000000',   // 平均成交价
        //     executedQty: '10.0000000000', // 已成交数量
        //     tradeCount: 1,                // 成交次数
        //     failReason: 0,
        //     fee: {
        //     value: '0.0000116355',
        //         inBix: '0.0000000000',
        //         inCoupon: '0.0000000000'
        //     },
        //     action: 'ENTRY',
        //     side: 'LONG',
        //     orderStatus: 'FILLED',
        //     makerFee: '0.0002000000',
        //     takerFee: '0.0005500000',
        //     createTime: 1605784674000,
        //     updateTime: 1605784674000,
        //     userId: 11966257
        // }

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

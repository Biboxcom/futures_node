bibox-futures-client 
===========================
#### 简介
Bibox平台币本位合约SDK
#### 环境依赖
node v14+

#### 使用方法
        
        // 新建客户端对象 公开的api可以不传apiKey与secretKey
        const { BiboxFuturesClient  } = require( "../../biboxFuturesClient" );
        const apiKey = "Your apiKey";
        const secretKey = "Your secretKey";
        const client = new BiboxFuturesClient( apiKey, secretKey );
        
        // 公开的api 获取kline
        let res = await client.getCandlestick( "BTC_USD", TimeInterval.DAILY, 10 );
        console.log( res );
        
        // 用户的api 转入或转出合约账户
        await client.transferIn( "ETH", 0.0001 );
        await client.transferOut( "ETH", 0.0001 );
        
        // 用户的api 下单
        let orderId1 = await client.placeMarketOrder( {
            symbol: "BTC_USD",
            quantity: 1,
            tradeSide: TradeSide.LONG,
            tradeAction: TradeAction.ENTRY
        } );
        console.log( orderId1 );
        let orderId2 = await client.placeLimitOrder( {
            symbol: "ETH_USD",
            quantity: 1,
            price: 490,
            tradeSide: TradeSide.LONG,
            tradeAction: TradeAction.ENTRY
        } );
        console.log( orderId2 );
        
        // 公开的订阅 订阅kline
        client.subscribeCandlestick( "BTC_USD", TimeInterval.ONE_MINUTE, ( data ) => {
            console.log( "BTC_USD", data );
        } );
        
        // 用户的订阅 用户资产数据
        client.subscribeAccount(  ( data ) => {
            console.log( data );
        } );
        
        // 更多的可以参考测试用例





#### V1.0.0 版本内容更新
无

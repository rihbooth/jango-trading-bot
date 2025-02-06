const tokenSniping = require('./tokenSniping');
const arbitrageLogic = require('./arbitrageLogic');
const stopLossTakeProfit = require('./stopLossTakeProfit');
const marketDataFetcher = require('./marketDataFetcher');

async function executeTrade(tradeDetails) {
    try {
        const marketData = await marketDataFetcher.fetchMarketData(tradeDetails.token);
        
        if (tradeDetails.type === 'snipe') {
            return await tokenSniping.snipeToken(tradeDetails);
        } else if (tradeDetails.type === 'arbitrage') {
            return await arbitrageLogic.executeArbitrage(tradeDetails);
        } else if (tradeDetails.type === 'stopLoss' || tradeDetails.type === 'takeProfit') {
            return await stopLossTakeProfit.manageTrade(tradeDetails);
        }
    } catch (error) {
        console.error('Trade execution error:', error);
    }
}

module.exports = { executeTrade };
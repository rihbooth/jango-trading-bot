const Binance = require("node-binance-api");
const dotenv = require("dotenv");
const logger = require("./logger");

dotenv.config();

const binance = new Binance().options({
  APIKEY: process.env.BINANCE_API_KEY,
  APISECRET: process.env.BINANCE_API_SECRET
});

const SYMBOL = "BTCUSDT";
const INTERVAL = "1h";
const SHORT_MA_PERIOD = 7;
const LONG_MA_PERIOD = 25;

const getMovingAverage = async (symbol, interval, period) => {
  const candles = await binance.candlesticks(symbol, interval, { limit: period });
  const closingPrices = candles.map(candle => parseFloat(candle[4]));
  const sum = closingPrices.reduce((acc, price) => acc + price, 0);
  return sum / closingPrices.length;
};

const trade = async () => {
  const shortMA = await getMovingAverage(SYMBOL, INTERVAL, SHORT_MA_PERIOD);
  const longMA = await getMovingAverage(SYMBOL, INTERVAL, LONG_MA_PERIOD);

  if (shortMA > longMA) {
    logger.info(`Buying ${SYMBOL}`);
    // Execute buy order
  } else if (shortMA < longMA) {
    logger.info(`Selling ${SYMBOL}`);
    // Execute sell order
  } else {
    logger.info("No trade signal");
  }
};

const startTrading = () => {
  setInterval(trade, 60 * 60 * 1000); // Run every hour
};

startTrading();

module.exports = { getMovingAverage };
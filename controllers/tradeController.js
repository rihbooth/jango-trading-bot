const Trade = require('../models/tradeHistoryModel');
const { startTradingBot, stopTradingBot } = require('../services/tradingBotService');

exports.startBot = async (req, res) => {
  try {
    await startTradingBot();
    res.status(200).send({ message: 'Trading bot started' });
  } catch (error) {
    res.status(500).send({ message: 'Error starting trading bot', error });
  }
};

exports.stopBot = async (req, res) => {
  try {
    await stopTradingBot();
    res.status(200).send({ message: 'Trading bot stopped' });
  } catch (error) {
    res.status(500).send({ message: 'Error stopping trading bot', error });
  }
};

exports.fetchTradeHistory = async (req, res) => {
  try {
    const trades = await Trade.find();
    res.status(200).send(trades);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching trade history', error });
  }
};
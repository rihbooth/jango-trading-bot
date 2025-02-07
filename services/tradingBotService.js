let botRunning = false;

exports.startTradingBot = () => {
  return new Promise((resolve, reject) => {
    if (botRunning) {
      return reject(new Error('Bot is already running'));
    }
    botRunning = true;
    // Start the trading bot logic here
    resolve();
  });
};

exports.stopTradingBot = () => {
  return new Promise((resolve, reject) => {
    if (!botRunning) {
      return reject(new Error('Bot is not running'));
    }
    botRunning = false;
    // Stop the trading bot logic here
    resolve();
  });
};
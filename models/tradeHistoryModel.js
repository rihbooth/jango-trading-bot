const mongoose = require('mongoose');

const tradeHistorySchema = new mongoose.Schema({
  token: String,
  buyPrice: Number,
  sellPrice: Number,
  profit: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TradeHistory', tradeHistorySchema);
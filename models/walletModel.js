const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  address: { type: String, unique: true, required: true },
  balance: Number
});

module.exports = mongoose.model('Wallet', walletSchema);
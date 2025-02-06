const tradeHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true },
    tradeType: { type: String, enum: ['buy', 'sell'], required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TradeHistory', tradeHistorySchema);
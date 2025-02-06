const botLogsSchema = new mongoose.Schema({
    botId: { type: String, required: true },
    logType: { type: String, enum: ['info', 'error', 'warning'], required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BotLogs', botLogsSchema);
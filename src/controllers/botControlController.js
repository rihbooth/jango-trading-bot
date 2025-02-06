const express = require('express');
const router = express.Router();

let botStatus = false;
let botSettings = { riskLevel: 'medium', tradeInterval: 5 };

// Start the bot
router.post('/start', (req, res) => {
    botStatus = true;
    res.json({ message: 'Bot started successfully', status: botStatus });
});

// Stop the bot
router.post('/stop', (req, res) => {
    botStatus = false;
    res.json({ message: 'Bot stopped successfully', status: botStatus });
});

// Update bot settings
router.post('/settings', (req, res) => {
    const { riskLevel, tradeInterval } = req.body;
    botSettings = { riskLevel, tradeInterval };
    res.json({ message: 'Bot settings updated', settings: botSettings });
});

module.exports = router;
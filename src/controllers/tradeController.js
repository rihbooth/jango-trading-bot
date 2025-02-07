const express = require("express");
const router = express.Router();
const { executeTrade } = require("../services/tradeService");

// Execute trade
router.post("/trade", async (req, res) => {
    try {
        const { token, amount, tradeType } = req.body;
        if (!token || !amount || !tradeType) {
            return res.status(400).json({ error: "Missing required parameters" });
        }
        
        const tradeResult = await executeTrade(token, amount, tradeType);
        res.json({ message: "Trade executed successfully", tradeResult });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
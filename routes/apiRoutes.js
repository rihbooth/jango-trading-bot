const express = require('express');
const router = express.Router();

const tradeController = require('../controllers/tradeController');
const walletController = require('../controllers/walletController');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Trade routes
router.post('/start', roleMiddleware.checkRole(['admin', 'trader']), tradeController.startBot);
router.post('/stop', roleMiddleware.checkRole(['admin', 'trader']), tradeController.stopBot);
router.get('/trades', roleMiddleware.checkRole(['admin', 'trader', 'viewer']), tradeController.fetchTradeHistory);

// Wallet routes
router.get('/wallets', roleMiddleware.checkRole(['admin', 'trader', 'viewer']), walletController.getWallets);

module.exports = router;
const Web3 = require("web3");
const web3 = new Web3();

const validateWalletAddress = (req, res, next) => {
    const { walletAddress } = req.body;
    if (!walletAddress || !web3.utils.isAddress(walletAddress)) {
        return res.status(400).json({ message: "Invalid Wallet Address" });
    }
    next();
};

const verifyTransactionIntegrity = (req, res, next) => {
    const { signedTransaction } = req.body;
    try {
        const decodedTx = web3.eth.accounts.recoverTransaction(signedTransaction);
        if (!decodedTx) throw new Error("Transaction verification failed");
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid or Tampered Transaction" });
    }
};

module.exports = { validateWalletAddress, verifyTransactionIntegrity };
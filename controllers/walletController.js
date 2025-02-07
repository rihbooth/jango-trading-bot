const Wallet = require('../models/walletModel');

exports.getWallets = async (req, res) => {
  try {
    const wallets = await Wallet.find();
    res.status(200).send(wallets);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching wallets', error });
  }
};
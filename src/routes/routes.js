const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet');
const historyController = require('../controllers/history');

router.get('/', walletController.wallet);

router.post('/transaction', historyController.save);

module.exports = router;
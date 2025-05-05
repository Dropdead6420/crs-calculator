const router = require('express').Router();
const NOCTeerJobOfferController = require('../controllers/NOCTeerJobOffer.controller');

router.get('/', NOCTeerJobOfferController.getAll);

module.exports = router;
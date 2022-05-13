const express = require('express');
const router = express.Router();
const rootController = require('../controllers/rootController.js')

router.route('/')
    .get(rootController.rootMsg);
    
module.exports = router;
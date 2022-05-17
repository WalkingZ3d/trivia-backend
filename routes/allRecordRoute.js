const express = require('express');
const router = express.Router();
const recordController = require('../controllers/allRecordController')

router.route('/records')
    .get(recordController.showAllRecords);
    
module.exports = router;
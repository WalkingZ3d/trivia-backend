const express = require("express");
const router = express.Router();
const recordController = require("../controllers/records");

router.route("/records").get(recordController.showAllRecords);

module.exports = router;

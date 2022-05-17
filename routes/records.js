const express = require("express");
const router = express.Router();
const recordsController = require("../controllers/records");

router.route("/").get(recordsController.showAllRecords);

module.exports = router;

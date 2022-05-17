const express = require("express");
const router = express.Router();
const recordController = require("../controllers/records");

router.route("/").get(recordController.showAllRecords); // shows all game records
router.route("/:id").get(recordController.showRecordById); // shows game records by id
router.route("/winners").get(recordController.showAllWinners); // shows all winners

module.exports = router;

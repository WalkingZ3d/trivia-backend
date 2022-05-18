const express = require("express");
const router = express.Router();
const recordController = require("../controllers/records");

router.route("/").get(recordController.showAllRecords); // shows all game records
router.route("/createrecord").post(recordController.createRecord); // creates new game record
router.route("/winners").get(recordController.showAllWinners); // shows all winners
router.route("/winners/:id").get(recordController.showRecordById); // shows game records by id

module.exports = router;

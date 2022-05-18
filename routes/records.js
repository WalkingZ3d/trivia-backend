const express = require("express");
const router = express.Router();
const recordController = require("../controllers/records");

router.route("/").get(recordController.showAllRecords); // shows all game records
router.route("/winners").get(recordController.showAllWinners); // shows all winners
router.route("/winners/:id").get(recordController.showRecordById); // shows game records by id
router.route("/players").get(recordController.allPlayers);
router.route("/players/:id").get(recordController.showAllGamesById); // shows all games by a player

module.exports = router;

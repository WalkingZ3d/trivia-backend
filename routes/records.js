const express = require("express");
const router = express.Router();
const recordController = require("../controllers/records");

router.route("/").get(recordController.showAllRecords);

// router.route("/").get(playerController.getAll);
// router.route("/").post(playerController.create);
// router.route("/:id").get(playerController.show);
// router.route("/:id").get(playerController.update);
// router.route("/:id").get(playerController.remove);

module.exports = router;

const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.route("/").get(playerController.index);
router.route("/").post(playerController.create);
router.route("/:id").get(playerController.show);
router.route("/:id").get(playerController.update);
router.route("/:id").get(playerController.remove);

module.exports = router;

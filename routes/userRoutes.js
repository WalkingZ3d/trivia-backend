const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.index);
router.route("/").post(userController.create);
router.route("/:id").get(userController.show);
router.route("/:id").get(userController.update);
router.route("/:id").get(userController.remove);

module.exports = router;

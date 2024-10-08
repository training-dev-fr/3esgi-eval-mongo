const express = require("express");
const router = express.Router();
const userController = require("./../controller/user.controller");

router.post("/login", authController.login);

router.post("/signin", authController.signin);

module.exports = router;
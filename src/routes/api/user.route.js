const express = require("express");
const router = express.Router();

//import controller
const user_controller = require("../../controllers/user.controller");

router.post("/register", user_controller.register_user_controller);

module.exports = router;

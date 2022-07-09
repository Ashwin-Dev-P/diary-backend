const express = require("express");
const router = express.Router();

//import routes
const user_routes = require("../api/user.route");

router.use("/user", user_routes);

module.exports = router;

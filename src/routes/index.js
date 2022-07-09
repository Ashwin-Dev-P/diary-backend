const express = require("express");
const router = express.Router();

//api routes
const api_routes = require("./api/index.js");

router.use("/api", api_routes);

router.use("/", (req, res) => {
  return res.send("Diary API by Ashwin Dev P");
});

module.exports = router;

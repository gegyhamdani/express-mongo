const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Routing Test");
});

module.exports = router;

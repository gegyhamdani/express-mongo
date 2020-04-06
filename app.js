const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.get("/", (req, res) => {
  res.send("Routing Test");
});

mongoose.connect(process.env.DB_CONNECTIOn, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

app.listen(5000);

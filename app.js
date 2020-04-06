const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Success");
});

mongoose.connect(process.env.DB_CONNECTIOn, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

app.listen(5000);

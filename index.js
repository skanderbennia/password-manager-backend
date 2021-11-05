const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes");
const fs = require("fs");
const https = require("https");
const path = require("path");
//making an https server (thoses are the requirement for creating a ssl server)
dotenv.config();

const app = express();
app.use(express.json());
app.use("/", (req, res, next) => {
  res.send("hello from ssl server !!");
});
const sslServer = https.createServer(
  {
    key: "",
    certificate: "",
  },
  app
);
const port = 3443;
const DB = process.env.DATABASE_STRING;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/api/v1", router);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database ------"));
sslServer.listen(port, () => {
  console.log("sercure server on port : ", port);
});

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! on top");
});

function main() {
  connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
}

main();

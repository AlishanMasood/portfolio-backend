import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

function main() {
  connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
}
main();

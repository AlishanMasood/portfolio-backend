import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

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

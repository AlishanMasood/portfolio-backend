import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello World! on top");
});

function main() {
  connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port 😆 ${process.env.PORT}`);
  });
}

main();

import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(5001, () => {
  console.log("Server Running at port 5001");
});

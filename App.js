import express from "express";

import cors from "cors";
import connectDB from "./Db/connectDb";
import aiRoute from "./Controllers/aiController";
import aiSave from "./Controllers/saveaiController";

import dotenv from "dotenv";
dotenv.config();

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/check", (req, res) => {
  res.send("hai im here");
});

app.use("/api/ask-ai",aiRoute)
app.use("/api/ask-ai",aiSave)

const start = async () => {
  try {
    await connectDB();
   app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
};

start();

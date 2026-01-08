const express = require("express");

const cors = require("cors");
const connectDB = require("./Db/connectDb");
const aiRoute = require("../Server/Controllers/aiController")
const aiSave = require("./Controllers/saveaiController")

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

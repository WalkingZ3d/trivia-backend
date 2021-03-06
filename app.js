const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const favicon = require("express-favicon");
const app = express();

dotenv.config();

// Database Connection:
async function dbConnect() {
  try {
    await mongoose.connect(process.env.DATABASE_ACCESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");
  } catch (err) {
    console.log("Database failed to connect");
  }
}
dbConnect();

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(favicon(__dirname + "/public/images/favicon.ico"));

app.get("/", (req, res) => {
  res.send("Welcome to the Neweet Trivia API!");
});

// Routes for the game records
const recordRoutes = require("./routes/records");
app.use("/records", recordRoutes);

// 404 page if user navigates to non-existent end-point
app.use((req, res) => {
  res.status(404).render("404");
});

module.exports = app;

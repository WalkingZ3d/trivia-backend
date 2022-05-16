const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the Neweet Trivia API!");
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// 404 page if user navigatesto non-existent endpoint
app.use((req, res) => {
  res.status(404).render("404");
});

module.exports = app;

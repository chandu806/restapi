const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to page");
});
app.get(
  "/books",
  (req, res, next) => {
    console.log("Fetching books");
    next();
  },
  (req, res) => {
    res.send("Welcome to Book page");
  }
);
app.get("/books/:name", (req, res) => {
  res.send({ bookName: req.params.name });
});

module.exports = app;
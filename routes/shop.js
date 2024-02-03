const express = require("express");
const path = require("path");
const route = express.Router();

route.get("/", (req, res, next) => {
  // res.send("<h1>Welcom message</h1>");
  // next();
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = route;

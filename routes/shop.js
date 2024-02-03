const express = require("express");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.send("<h1>Welcom message</h1>");
  // next();
});

module.exports = route;

const express = require("express");
const router = express.Router();

router.use("/add", (req, res) => {
  console.log("add Product");
  res.send(
    // '<h1>add Product</h1>  <form action="/store" method="POST"><input type="text" name="title"><input type="submit" value="Submit"></form>'
    '<h1>add Product</h1>  <form action="/admin/store" method="POST"><input type="text" name="title"><input type="submit" value="Submit"></form>'
  );
});

router.post("/store", (req, res) => {
  console.log("store midleware");
  console.log("Form data : ", req.body);
  res.send("<h1>From submited</h1>");
});

module.exports = router;

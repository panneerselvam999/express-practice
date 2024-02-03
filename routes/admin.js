const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/add", (req, res) => {
  console.log("add Product");
  // res.send(
  //   // '<h1>add Product</h1>  <form action="/store" method="POST"><input type="text" name="title"><input type="submit" value="Submit"></form>'
  //   '<h1>add Product</h1>  <form action="http://localhost:3500/admin/store" method="POST"><input type="text" name="title"><input type="submit" value="Submit"></form>'
  // );
  res.sendFile(path.join(__dirname, "../", "views", "add.html"));
});

router.post("/store", (req, res) => {
  console.log("store midleware");
  console.log("Form data : ", req.body);
  res.send("<h1>From submited</h1>");
});
// router.use(bp.urlencoded());

module.exports = router;

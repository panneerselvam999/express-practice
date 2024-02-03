// const http = require("http");
// const express = require("express");
// const app = express();
// const PORT = 3500;

// // http.createServer((req, res) => {}).listen(PORT);
// http.createServer(app).listen(PORT);
// console.log("Server is running on : " + PORT);

// // ------------------------------------------------------------------------------------------
// //middle ware
// const http = require("http");
// const express = require("express");
// const app = express();
// const PORT = 3500;

// app.use((req, res, next) => {
//   console.log("First middlwere");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Second middlwere");
//   next();
// });
// app.use(() => {
//   console.log("Third middlwere");
// });

// http.createServer(app).listen(PORT);
// console.log("Server is running on : " + PORT);

// // ------------------------------------------------------------------------------------------
// //middle ware, send method
// const http = require("http");
// const express = require("express");
// const app = express();
// const PORT = 3500;

// app.use((req, res, next) => {
//   console.log("First middlwere");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Second middlwere");
//   next();
// });
// app.use((req, res) => {
//   console.log("Third middlwere");
//   //   res.send("<h1>Express js tutorial</h1>");
//   res.send({ some: "json" });
// });

// http.createServer(app).listen(PORT);
// console.log("Server is running on : " + PORT);
// // ------------------------------------------------------------------------------------------
// //middle ware, send method, express listen
// const http = require("http");
// const express = require("express");
// const app = express();
// const PORT = 3500;

// app.use((req, res, next) => {
//   console.log("First middlwere");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Second middlwere");
//   next();
// });
// app.use((req, res) => {
//   console.log("Third middlwere");
//   //   res.send("<h1>Express js tutorial</h1>");
//   res.send({ some: "json" });
// });

// // http.createServer(app).listen(PORT);
// app.listen(PORT);
// console.log("Server is running on : " + PORT);

// // ------------------------------------------------------------------------------------------
// //middle ware, send method, express listen, middleware

// const express = require("express");
// const app = express();
// const PORT = 3500;

// app.use("/second", (req, res) => {
//   console.log("Second midleware");
//   res.send("<h1>Second Page</h1>");
// });

// app.use("/thired", (req, res) => {
//   console.log("thired midleware");
//   res.send("<h1>thired Page</h1>");
// });

// app.use((req, res) => {
//   console.log("Always middleware");
//   res.send("<h1>Always middleware</h1>");
// });

// app.listen(PORT);
// console.log("port is running : " + PORT);
// // ------------------------------------------------------------------------------------------
// //middle ware, send method, express listen, middleware, parsing data from request

// const express = require("express");
// const app = express();
// const PORT = 3500;

// app.use("/add", (req, res) => {
//   console.log("add Product");
//   res.send(
//     '<h1>add Product</h1>  <form action="/store" method="POST"><input type="text" name="title"><input type="submit" value="Submit"></form>'
//   );
// });

// app.use("/store", (req, res) => {
//   console.log("store midleware");
//   console.log("Form data : " + req.body);
//   res.send("<h1>store Page</h1>");
// });

// app.listen(PORT);
// console.log("port is running : " + PORT);
// // ------------------------------------------------------------------------------------------
// //middle ware, send method, express listen, middleware, parsing data from request,body-parser

// const express = require("express");
// const app = express();
// const bp = require("body-parser");
// const PORT = 3500;

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true })); // Set extended option explicitly

// app.use(bp.urlencoded());
// // app.use(express.urlencoded({ extended: false }));

// app.use("/add", (req, res) => {
//   console.log("add Product");
//   res.send(
//     '<h1>add Product</h1>  <form action="/store" method="POST"><input type="text" name="title"><input type="submit" value="Submit"></form>'
//   );
// });

// app.use("/store", (req, res) => {
//   console.log("store midleware");
//   console.log("Form data : " , req.body);
//   res.send("<h1>From submited</h1>");
// });

// app.listen(PORT);
// console.log("port is running : " + PORT);
// // ------------------------------------------------------------------------------------------
// //middle ware, send method, express listen, middleware, parsing data from request,body-parser
// // post method

// const express = require("express");
// const app = express();
// const bp = require("body-parser");
// const PORT = 3500;

// app.use(bp.urlencoded());

// app.use("/add", (req, res) => {
//   console.log("add Product");
//   res.send(
//     '<h1>add Product</h1>  <form action="/store" method="POST"><input type="text" name="title"><input type="submit" value="Submit"></form>'
//   );
// });

// app.post("/store", (req, res) => {
//   console.log("store midleware");
//   console.log("Form data : ", req.body);
//   res.send("<h1>From submited</h1>");
// });

// app.listen(PORT);
// console.log("port is running : " + PORT);
// // ------------------------------------------------------------------------------------------
// //middle ware, send method, express listen, middleware, parsing data from request,body-parser
// // post method

// const express = require("express");
// const app = express();
// const bp = require("body-parser");
// const PORT = 3500;

// app.use(bp.urlencoded());

// app.use("/add", (req, res) => {
//   console.log("add Product");
//   res.send(
//     '<h1>add Product</h1>  <form action="/store" method="POST"><input type="text" name="title"><input type="submit" value="Submit"></form>'
//   );
// });

// app.post("/store", (req, res) => {
//   console.log("store midleware");
//   console.log("Form data : ", req.body);
//   res.send("<h1>From submited</h1>");
// });

// app.listen(PORT);
// console.log("port is running : " + PORT);
// // ------------------------------------------------------------------------------------------
// //middle ware, send method, express listen, middleware, parsing data from request,body-parser
// // post method, routing, route folder

// const express = require("express");
// const app = express();
// const bp = require("body-parser");
// const PORT = 3500;

// const adminRoute = require("./routes/admin");
// const shopRoute = require("./routes/shop");

// app.use(adminRoute);
// app.use(shopRoute);
// app.use((req, res, next) => {
//   res.status(404).send("<h1>404 error</h1>");
// });
// app.use(bp.urlencoded());

// app.listen(PORT);
// console.log("port is running : " + PORT);
// ------------------------------------------------------------------------------------------
//middle ware, send method, express listen, middleware, parsing data from request,body-parser
// post method, routing, route folder, filtering paths/URL prefi

const express = require("express");
const app = express();
const bp = require("body-parser");
const PORT = 3500;

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use((req, res, next) => {
  res.status(404).send("<h1>404 error</h1>");
});
app.use(bp.urlencoded());

app.listen(PORT);
console.log("port is running : " + PORT);

const http = require("http");

const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("1 - Middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("2 - Middleware");
//   res.send("<h1>Express Module</h1>");
// });

app.use("/users", (req, res) => {
  res.send("<h1>Users Route</h1>");
});

app.use("/", (req, res) => {
  res.send("<h1>Initial Route</h1>");
});

app.listen(3000);

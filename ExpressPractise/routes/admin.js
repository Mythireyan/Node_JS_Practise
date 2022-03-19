const path = require("path");

const express = require("express");

const rootDir = require("../utils/rootPath");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
});

router.post("/add-product", (req, res, next) => {
  res.redirect("/");
  console.log(req.body);
});

module.exports = router;

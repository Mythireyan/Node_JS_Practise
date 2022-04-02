const path = require("path");

const express = require("express");

const rootDir = require("../utils/rootPath");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData?.productsArr;
  res.render("shop", { prods: products, docTitle: "Shop", path: "shop" });
});

module.exports = router;

const path = require("path");

const express = require("express");

const rootDir = require("../utils/rootPath");

const router = express.Router();

const productsArr = [];

router.get("/add-product", (req, res, next) => {
  res.render("addProduct", { pageTitle: "Add Product", path: "addProduct" });
});

router.post("/add-product", (req, res, next) => {
  productsArr?.push({ title: req?.body?.title });
  res.redirect("/");
});

exports.router = router;
exports.productsArr = productsArr;

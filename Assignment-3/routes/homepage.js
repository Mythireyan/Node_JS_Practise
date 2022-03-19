const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(
    path.join(
      path.dirname(process.mainModule.filename),
      "views",
      "homepage.html"
    )
  );
});

module.exports = router;

const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.sendFile(
    path.join(path.dirname(process.mainModule.filename), "views", "users.html")
  );
});

module.exports = router;

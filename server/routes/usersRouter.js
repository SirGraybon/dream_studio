const express = require("express");
const router = express.Router();
const testUser = { user: "admin", password: "admin" };




router.post("/login", function (req, res) {
  if (
    req.body.username === testUser.user &&
    req.body.password === testUser.password
  ) {
    res.send(true);
  } else {
    res.send(false);
  }
});

module.exports = router;

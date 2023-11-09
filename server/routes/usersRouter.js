const express = require("express");
const router = express.Router();


const testUser = {user: "admin", password: "admin"}

router.post("/login", function (req, res) {
  console.log(req)
  
});
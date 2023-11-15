const express = require("express");
const router = express.Router();
const dreams = require("../db/queries/dreams");




router.get("/", function (req, res) {
    dreams.getAllDreams().then((data)=> {
      res.json({dreams: data})
    })

  
});

module.exports = router;
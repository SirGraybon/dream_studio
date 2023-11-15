const express = require("express");
const router = express.Router();
const dreams = require("../db/queries/dreams");


router.post("/submit", function(req,res) {
  const dreamObj = req.body
  dreams.newDream(dreamObj.user_id, dreamObj.title)
  .then(result => dreamObj.events.forEach((element,index) => {
    dreams.newEvent(result.rows[0].id, element, dreamObj.image, index )
  }))
})

router.get("/", function (req, res) {
    dreams.getAllDreams().then((data)=> {
      res.json({dreams: data})
    })

  
});

module.exports = router;
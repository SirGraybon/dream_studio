const db = require("../../configs/db.config");


const getAllDreams = () => {
  return db.query("SELECT * FROM dreams JOIN events ON dreams.id = events.dream_id").then(data => {

    
    return data
  })
}


module.exports = {getAllDreams}
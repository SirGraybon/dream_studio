const db = require("../../configs/db.config");


const getAllDreams = () => {
  return db.query("SELECT * FROM dreams").then(data => {
    return data
  })
}
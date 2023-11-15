const db = require("../../configs/db.config");

const getAllDreams = () => {
  return db
    .query("SELECT * FROM dreams JOIN events ON dreams.id = events.dream_id")
    .then((data) => {
      return data;
    });
};

const newDream = (user_id, title) => {
  return db
  .query(`INSERT INTO dreams (user_id, title) VALUES ($1, $2) RETURNING id`, [user_id, title])
}
const newEvent = (dream_id, description, image, dream_index) => {
  return db
  .query(`INSERT INTO events (dream_id, description, image, dream_index) VALUES ($1, $2, $3, $4) `, [dream_id, description,image,dream_index])
}
module.exports = { getAllDreams, newDream, newEvent };

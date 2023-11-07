// import backdrop from "/testAssets/Test.jpg"
const express = require('express')
const app = express()
const PORT = 8001
const cors = require("cors")
app.use(cors())
const dream = {
  dreamID: 1,
  userID: 1,
  title: "My First Dream",
  image: "https://www.bing.com/images/create/spaceport-on-the-moon/654a8bf9c16344fb9c4cd98c680b3f38?id=TsGVC3V%2f%2bU5VTpPz%2f6x%2bLQ%3d%3d&view=detailv2&idpp=genimg",
  story:["In the not-so-distant future, humanity had achieved a remarkable feat - the establishment of a bustling space station on the moon's desolate surface. Known as Lunar Haven, this extraordinary outpost served as a testament to human ingenuity and a stepping stone for the further exploration of our celestial neighbor. The station was constructed within a massive crater, offering protection from the harsh lunar environment while its towering solar panels glistened under the constant glow of Earth, supplying power to its bustling facilities.", "Lunar Haven's inhabitants were a diverse group of scientists, engineers, and pioneers from various nations, all united by their shared dream of unraveling the moon's mysteries. As they conducted groundbreaking research on lunar geology, the station also functioned as a vital hub for international collaboration. The community within its pressurized walls thrived, with hydroponic gardens providing fresh produce and leisure areas where residents gathered to share stories of their lunar experiences. It was a place where innovation and camaraderie flourished.", "Each day, the station's observatory offered breathtaking views of the Earth hanging in the sky above, a constant reminder of the potential for human exploration and discovery. Lunar Haven had become a beacon of hope and a symbol of our unrelenting curiosity, inspiring future generations to reach even further into the cosmos, making the moon a pivotal stepping stone on humanity's journey to the stars." ],
  
}

app.get("/", (req, res) => {
  res.send(dream)
})

app.listen(PORT, ()=> {
  console.log(`App listening on port ${PORT}` )
})
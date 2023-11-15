const express = require('express')
const app = express()
const path = require("path");
const PORT = 8001
const bodyParser = require("body-parser");

const cors = require("cors")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors()
);








const usersRouter = require("./routes/usersRouter");
const dreamsRouter = require("./routes/dreamsRouter.js");

app.use("/users", usersRouter);
app.use("/dreams", dreamsRouter);

app.listen(PORT, ()=> {
  console.log(`App listening on port ${PORT}` )
})
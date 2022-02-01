const express = require("express");
const app = express();
const port=8080;

app.listen(port, () => {
  console.log("Application started and Listening on port 8080");
});

// serve your css as static
app.use(express.static('public'));



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/htmlfile.html");
});
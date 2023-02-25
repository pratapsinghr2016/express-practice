const express = require("express");
const app = express();
const path = require("path");

const pathUrl = path.join(__dirname + "/public");

app.use(express.static(pathUrl));

app.get("/", (req, res) => {
  res.write("<h1>Hello world</h1>");
  res.write("<h1>Hello world 2</h1>");
  res.end();
});

app.listen(8080, () => {
  console.log("listening at port 8080");
});

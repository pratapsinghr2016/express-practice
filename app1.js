const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/about", (req, res) => {
  res.send("Hello world from About");
});

app.get("/json", (req, res) => {
  res.send("Hello world from About");
});

app.listen(8080, () => {
  console.log("listening at port 8080");
});

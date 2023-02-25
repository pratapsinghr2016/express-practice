const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.write("<h1>Hello world</h1>");
  res.write("<h1>Hello world 2</h1>");
  res.end();
});

app.get("/json", (req, res) => {
  res.send([
    { id: 1, name: "John Doe", city: "London" },
    { id: 1, name: "John Doe", city: "London" },
  ]);
});

app.get("/pureJson", (req, res) => {
  res.json([
    { id: 1, name: "John Doe", city: "London" },
    { id: 1, name: "John Doe", city: "London" },
  ]);
});

app.listen(8080, () => {
  console.log("listening at port 8080");
});

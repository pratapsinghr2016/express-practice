const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8080;

// const static homePath = path.join(__dirname + "/public");

const homePath = path.join(__dirname + "/page/views");
const aboutPath = path.join(__dirname + "/page/views/about");
const contactPath = path.join(__dirname + "/page/views/contact");
const notFoundPath = path.join(__dirname + "/page/views/404");

app.use(express.static(homePath));

const partialsPath = path.join(__dirname + "/page/partials");

app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render(homePath, {
    page: "HOME",
    dynamicContent: "Dynamic Content is here",
  });
});

app.get("/about", (req, res) => {
  res.render(aboutPath, {
    page: "ABOUT",
    dynamicContent: "Dynamic Content for about here",
  });
});

app.get("/contact", (req, res) => {
  res.render(contactPath, {
    page: "CONTACT",
    dynamicContent: "Dynamic Content for contact here",
  });
});

app.get("*", (req, res) => {
  res.render(notFoundPath, {
    page: "404",
    dynamicContent: "Dynamic Content for 404. Page not found",
  });
});

app.listen(port, () => {
  console.log("listening at port 8080");
});

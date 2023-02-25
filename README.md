
Express-js

Express.js is a Node.js framework that is helpful to build BE APIs

Deployed on  [DEMO](https://lazy-handbag-fish.cyclic.app/)

    const  express = require("express");
    const  app = express();
    
    app.get("/", (req, res) => {
    res.send("Hello world");
    }); 
    
    app.get("/about", (req, res) => {
    res.send("Hello world from About");
    });
    
    app.listen(8080, () => {
    console.log("listening at port 8080");
    });

**Passing files & JSON in express**

    const  express = require("express");
    const  app = express();
    
    app.get("/", (req, res) => {
    res.write("<h1>Hello world</h1>");
    res.write("<h1>Hello world 2</h1>");
    res.end();
    });
    
    app.get("/json", (req, res) => {
    res.send([
    { id:  1, name:  "John Doe", city:  "London" },
    { id:  1, name:  "John Doe", city:  "London" },
    ]);
    });
    app.get("/pureJson", (req, res) => {
    res.json([
    { id:  1, name:  "John Doe", city:  "London" },
    { id:  1, name:  "John Doe", city:  "London" },
    ]);
    });
    
    app.listen(8080, () => {
    console.log("listening at port 8080");
    });

**Serve HTML, CSS & JS**

  

    const  express = require("express");
    const  app = express();
    const  path = require("path");
    const  pathUrl = path.join(__dirname + "/public");
    
    app.use(express.static(pathUrl));
    app.get("/", (req, res) => {
    res.write("<h1>Hello world</h1>");
    res.write("<h1>Hello world 2</h1>");
    res.end();
    });
    
    app.listen(8080, () => {
    console.log("listening at port 8080");
    });

 -   express.static(path_of_static_file)
 -   path.join()
    
    
    **Template engine usage in Express**
 - View Engine we are using is the hbs 
 - Template Engine is handlebars

*index.hbs*

    <html  lang="en">
    <head>
    <meta  charset="UTF-8" />
    <meta  http-equiv="X-UA-Compatible"  content="IE=edge" />
    <meta  name="viewport"  content="width=device-width, initial-scale=1.0" />
    <link  href="./styles.css"  type="text/css"  rel="stylesheet" />
    <title>Document</title>
    </head>
    
    <body>
    <h1>Hello world from HBS</h1>
    <p>{{dynamicContent}}</p>
    </body>
    
    </html>


*app.js*

    const  express = require("express");
    const  app = express();
    const  path = require("path");
    const  port = process.env.PORT || 8080;
    const  staticPathUrl = path.join(__dirname + "/public");
    app.use(express.static(staticPathUrl));
    const  pathUrl = path.join(__dirname + "/page/views");
    app.set("view engine", "hbs");
    app.get("/", (req, res) => {
    res.render(pathUrl, {
    dynamicContent:  "Dynamic Content is here",
    });
    });
    
    app.listen(port, () => {
    console.log("listening at port 8080");
    });

**Partials in Express**

The reusable component in HBS is called partials same as components in React.

![](https://lh5.googleusercontent.com/kbb4u3Crc662L063CD9s_3_RKIvtJAc_SDyjyBwEMRKcTtaRL8ovgrFwwmS503e4xIGVLlktlHxgZi3ViwTxjo5rJD9IssG4h1jfseAfbhJqtR085PwZrwr5PlmH7cFySdeutuqBiniBi9dWSc9g9Iw)

*index.hbs*

    <html  lang="en">
    {{>meta}}
    <body>
    {{>header}}
    <section  class="main">
    <h1>Hello world from HBS {{page}}</h1>
    <p>{{dynamicContent}}</p>
    </section>
    {{>footer}}
    </body>
    </html>

*404.hbs*

    <html  lang="en">
    {{>meta}}
    <body>
    {{>header}}
    <section  class="main"  style="background-color:burlywood;">
    <h1>Hello world from HBS {{page}}</h1>
    <h2>Page not found</h2>
    </section>
    {{>footer}}
    </body>
    </html>

Similarly, there will be many other pages like home, contact, about, etc.

*app.js*

    const  express = require("express");
    const  app = express();
    const  path = require("path");
    const  hbs = require("hbs");
    const  port = process.env.PORT || 8080;
    // const static homePath = path.join(__dirname + "/public");
    const  homePath = path.join(__dirname + "/page/views");
    const  aboutPath = path.join(__dirname + "/page/views/about");
    const  contactPath = path.join(__dirname + "/page/views/contact");
    const  notFoundPath = path.join(__dirname + "/page/views/404");
    app.use(express.static(homePath));
    
    const  partialsPath = path.join(__dirname + "/page/partials");
    app.set("view engine", "hbs");
    hbs.registerPartials(partialsPath);
    app.get("/", (req, res) => {
    res.render(homePath, {
    page:  "HOME",
    dynamicContent:  "Dynamic Content is here",
    });
    });
    
    app.get("/about", (req, res) => {
    res.render(aboutPath, {
    page:  "ABOUT",
    dynamicContent:  "Dynamic Content for about here",
    });
    });
    
    app.get("/contact", (req, res) => {
    res.render(contactPath, {
    page:  "CONTACT",
    dynamicContent:  "Dynamic Content for contact here",
    });
    });
    
    app.get("*", (req, res) => {
    res.render(notFoundPath, {
    page:  "404",
    dynamicContent:  "Dynamic Content for 404. Page not found",
    });
    });
    app.listen(port, () => {
    console.log("listening at port 8080");
    })
![enter image description here](https://i.pinimg.com/originals/d9/cd/79/d9cd7975c056dbd78d68aba4ef696068.gif)

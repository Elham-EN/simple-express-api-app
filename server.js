const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const path = require("path");
const PORT = 3000;
//Express Application
const app = express();

//Where we can set the view engine, that is the name of our templating
//engine like hbs.
app.set("view engine", "hbs");
//And the view which points to a directory where the application view can
//be found. Pointing view to the path of our views folder
app.set("views", path.join(__dirname, "views"));

//Middleware functions
app.use(function (req, res, next) {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next(); //pass control next middleware function
});

app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(function (req, res, next) {
  console.log(`Request Body: ${req.body.name}`);
  next(); //pass control next middleware function
});

app.use("/friends", friendsRouter);

app.use("/messages", messagesRouter);

app.get("/", (req, res) => {
  //Tell express that we're rendering the handlebars file called
  //index.hbs and the second arg is an object which has the values
  //for all of those variables in our hanldebars file.
  res.render("index", { title: "I like snow mountain", caption: "Let's go skiing!" });
});

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Listening on port: ${PORT}`);
  console.log("====================================");
});

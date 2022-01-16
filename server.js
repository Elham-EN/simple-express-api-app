const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const path = require("path");
const PORT = 3000;
//Express Application
const app = express();

//Middleware functions
app.use(function (req, res, next) {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next(); //pass control next middleware function
});

//Serving static page. The static() func input is a string containing a
//relative path of the folder that we want to make available from our server
//Make these static files available to route "/site".
//The path of this folder is relative. Specifcally relative to the folder from
//which you launch your node application
//app.use("/site", express.static("public"));

//Now static middleware is looking at the absolute path starting from the
//directory where server.js lives, which is the root of our project and then
//only from there looking into the public folder
app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(function (req, res, next) {
  console.log(`Request Body: ${req.body.name}`);
  next(); //pass control next middleware function
});

app.use("/friends", friendsRouter);

app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Listening on port: ${PORT}`);
  console.log("====================================");
});

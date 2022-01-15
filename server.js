const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

//Express Application
const app = express();

//Middleware functions
app.use(function (req, res, next) {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next(); //pass control next middleware function
});

app.use(express.json());

const PORT = 3000;

app.use(function (req, res, next) {
  console.log(`Request Body: ${req.body.name}`);
  next(); //pass control next middleware function
});

//we need to call app.use() function to use the Router. We also sometimes
//call this mounting the friend's router on the app object. And the special
//thing that router allow us to do is that we can mount a group of routes
//under a specific path.

//So if we know that all our friends are going to be under the '/friends' path
//just with different HTTP methods and something afterwards. Well we can mount
//our friendRouter on '/friends' path
app.use("/friends", friendsRouter);

//Mount messages Router to this express app
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Listening on port: ${PORT}`);
  console.log("====================================");
});

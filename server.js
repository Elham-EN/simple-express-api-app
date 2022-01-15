const express = require("express");

const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

//Express Application
const app = express();

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

app.get("/", (req, res) => {
  res.send("Welcome to the Server");
});

//Get all friends
app.get("/friends", friendsController.getAllFriends);
//Get a single friend
app.get("/friends/:friendId", friendsController.getFriend);
//Create a friend
app.post("/friends", friendsController.createFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.createMessages);

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Listening on port: ${PORT}`);
  console.log("====================================");
});

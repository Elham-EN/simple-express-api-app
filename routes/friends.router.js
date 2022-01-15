const express = require("express");
const friendsController = require("../controllers/friends.controller");
//Create a Router & we can add friends route in this router
const friendsRouter = express.Router(); //Self-contain application of its own

friendsRouter.use((req, res, next) => {
  console.log("This is friends router");
  next();
});

//From the perspective of the "/friends" friendRouter, this get is at
//of this mini application
friendsRouter.get("/", friendsController.getAllFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);
friendsRouter.post("/", friendsController.createFriend);

module.exports = friendsRouter; //export friend router

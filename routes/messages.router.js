const express = require("express");
const messagesController = require("../controllers/messages.controller");
const messagesRouter = express.Router();

messagesRouter.use((req, res, next) => {
  console.log("This is messages router");
  next();
});

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.createMessages);

module.exports = messagesRouter;

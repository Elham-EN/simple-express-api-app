/**
 * There is a special case if this file is call server.js
 * npm start will run this file without defining npm start
 * in the package.json file
 */
const express = require("express");

//Express Application
const app = express();

const PORT = 3000;

const friends = [
  { id: 0, name: "Elon Musk" },
  { id: 1, name: "Bill Gate" },
  { id: 2, name: "Jeff Bezo" },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Server");
});

app.get("/friends", (req, res) => {
  //only send javascript objects for json/application content type
  res.json(friends);
});

//Express will parse whatever comes after the slash
app.get("/friends/:friendId", (req, res) => {
  //Params give us access to the parameter in URL from the request
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId]; //if not found return undefined
  //if contain friend
  if (friend) {
    res.json(friend); //return that friend object
  } else {
    //if friend not found return 404 error and object
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Listening on port: ${PORT}`);
  console.log("====================================");
});

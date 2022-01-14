const express = require("express");

//Express Application
const app = express();

app.use(function (req, res, next) {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next(); //pass control next middleware function
});

//JSON built-in middleware function in Express that understand when a request
//is being passed in as JSON based on that content type header and when it
//notices a request with that application/json content-type, it will be doing
//the parsing for us. And a new body object containing the parsed data is
//populated on the request object.
//json() looks at the content type and sets the request body to javascript
//object when the content-type is application/json
app.use(express.json());
const PORT = 3000;

app.use(function (req, res, next) {
  console.log(`Request Body: ${req.body.name}`);
  next(); //pass control next middleware function
});

const friends = [
  { id: 0, name: "Elon Musk" },
  { id: 1, name: "Bill Gate" },
  { id: 2, name: "Jeff Bezo" },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Server");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId]; //if not found return undefined
  if (friend) {
    res.json(friend); //return that friend object
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

//Add friend to the collection, With POST request, we will mostly look at
//request object and reading data that was passed in from the client, data
//that's in JSON format. The problem is that our express server don't understand
//JSON out of the box. By convention we need to use JSON for all of our requests
app.post("/friends", (req, res) => {
  if (!req.body.name)
    return res.status(400).json({ error: "Bad request: Missing friend name" });
  const newFriend = {
    id: friends.length,
    //req.body have the property name in JSON format. Thid request body object
    //won't exist unless we pass the JSON using our middleware express.json()
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(friends);
});

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Listening on port: ${PORT}`);
  console.log("====================================");
});

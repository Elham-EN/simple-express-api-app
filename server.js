const express = require("express");

//Express Application
const app = express();

//We call the use function which will register our middleware
//with Express, so it knows to run it. In the middleware we pass
//callback to handle the request and response and it takes third
//parameter next function.
//Our callback here has the opportunity to work with the request,
//use the data from it and take some action before it reaches any
//of our route handlers. It might log the request coming in or do
//some validation on the data that's in the request, maybe it's
//checking that the user making that request is logged in and authorized
//The next function is to call the next middleware
app.use(function (req, res, next) {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next(); //pass control next middleware function
});

//We need to keep track of when the request started and when it completed.
app.use(function (req, res, next) {
  //When we enter this function is when our request was received
  const start = Date.now(); //Give current time in milliseconds
  //What happen next is this next() function is executed, Express finds the
  //matching route handler and then that handler returns and the flow of
  //execution returns to our middleware function right after the next() func.
  console.log("Request Time Start: ", start.toPrecision());
  next();
  //after any actions we do in here, the middleware will return and express
  //will send the response back to postman. Here we can measure the difference
  //between the current, the time that the response is being sent back.
  const delta = Date.now() - start; //represent different in times
  console.log("Complete of response time: ", delta.toPrecision());
});

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

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Listening on port: ${PORT}`);
  console.log("====================================");
});

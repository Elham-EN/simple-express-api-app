/**
 * There is a special case if this file is call server.js
 * npm start will run this file without defining npm start
 * in the package.json file
 */
const express = require("express");

//Express Application
const app = express();

const PORT = 3000;

//App objects let us respond to these requests. First arg is the path
//to that route or endpoint & second arg is route handler function which
//a callback function, it takes request and respond object
app.get("/", (req, res) => {
  res.send("Welcome to the Server");
});

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Listening on port: ${PORT}`);
  console.log("====================================");
});

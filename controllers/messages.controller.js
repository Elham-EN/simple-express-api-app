/**
 * Our route handler functions process the request coming in and
 * the response going out are going to be our controllers, those
 * things that interact with actions that the user takes, action
 * like making a request.
 */

function getMessages(req, res) {
  res.send(`<h1>Hello Albert!</h1>`);
}

function createMessages(req, res) {
  console.log("Updating Messages");
}

module.exports = { getMessages: getMessages, createMessages: createMessages };

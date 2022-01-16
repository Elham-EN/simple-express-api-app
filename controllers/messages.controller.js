/**
 * Our route handler functions process the request coming in and
 * the response going out are going to be our controllers, those
 * things that interact with actions that the user takes, action
 * like making a request.
 */

const path = require("path");

//Send File like image
function getMessages(req, res) {
  //dirname will give us where this file is current located, '..' move 1 level up
  const absoultePath = path.join(
    __dirname,
    "..",
    "public",
    "images",
    "skimountain.jpg"
  );
  res.sendFile(absoultePath); //must include absolute path (e.g from the root drive)
}

function createMessages(req, res) {
  console.log("Updating Messages");
}

module.exports = { getMessages: getMessages, createMessages: createMessages };

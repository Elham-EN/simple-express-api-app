/**
 * Our route handler functions process the request coming in and
 * the response going out are going to be our controllers, those
 * things that interact with actions that the user takes, action
 * like making a request.
 */

const friends = require("../models/friends.model");

function getAllFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId]; //if not found return undefined
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

function createFriend(req, res) {
  if (!req.body.name)
    return res.status(400).json({ error: "Bad request: Missing friend name" });
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(friends);
}

module.exports = { getAllFriends, getFriend, createFriend };

// Write your "actions" router here!
const express = require("express");
const router = express.Router();
const Action = require('./actions-model')

// Define your routes for actions here
// Example:
router.get("/", async (req, res, next) => {
try{
  const actions = await Action.get();
  if (!actions) {
    res.json(actions)
  } else {
    res.json(actions);
  }
} catch (error) {
  next(error);
}

});

module.exports = router;

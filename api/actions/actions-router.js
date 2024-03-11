// Write your "actions" router here!
const express = require("express");
const router = express.Router();

// Define your routes for actions here
// Example:
router.get("/", (req, res) => {
  res.json({ message: "List of actions" });
});

module.exports = router;

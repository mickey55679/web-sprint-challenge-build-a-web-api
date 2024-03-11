// Write your "projects" router here!
const express = require("express");
const router = express.Router();
const { validateProjectId, validateProject } = require("./projects-middleware");



// Define your routes for projects here
// Example:
router.get("/", (req, res) => {
  res.json(projects);
  console.log(projects);
});

module.exports = router;


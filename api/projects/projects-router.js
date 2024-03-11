// Write your "projects" router here!
const express = require("express");
const router = express.Router();
const { validateProjectId, validateProject } = require("./projects-middleware");
const Project = require('./projects-model')


// Define your routes for projects here
// Example:
router.get("/", async (req, res, next) => {
  try{
const projects = await Project.get();
res.json(projects);
  } catch(err){
    next(err);
  }
});


router.get('/:id', async (req, res, next) => {
const { id } = req.params;
try{
  const project = await Project.get(id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({message: "Project not found"})
  }
} catch (err) {
  next(err);
}
})










router.use(errorHandler);

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({error: "Something went wrong!"})
}


module.exports = router;


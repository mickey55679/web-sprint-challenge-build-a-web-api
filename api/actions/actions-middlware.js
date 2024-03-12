
const Project = require('./actions-model')

function validateAction(req, res, next){
  const {project_id, description, notes} = req.body;
  if(!project_id || !description || !notes) {
    return res.status(400).json({
      message: "Missing required project_id, description or notes field"
    })
  }
  next();
}


async function validateProjectId(req, res, next) {
  const { project_id } = req.body;
  try {
    const project = await Project.get(project_id);
    if (!project) {

      return res.status(400).json({ message: "Invalid project_id: Project does not exist." });
    }
    next();
  } catch (error) {
    next(error); 
  }
}



module.exports = {
  validateAction,
  validateProjectId,
}
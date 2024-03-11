
function validateProjectId(req, res, next) {
  const { id } = req.params;
  const project = projects.find((proj) => proj.id === Number(id));
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  next();
}
//Middleware to validate request body for creating/updating projects
function validateProject(req, res, next) {
    const {name, description} = req.body;
    if(!name || !description) {
        return res.status(400).json({
            message: "Name and description are required"
        });
        next();
    }
}
module.exports = { validateProjectId, validateProject };
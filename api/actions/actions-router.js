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
router.get('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const action = await Action.get(id);
    if (action) {
      res.json(action)
    } else {
      res.status(404).json({ message: "Action not found"})
    }
  } catch (error) {
    next(error)
  }
})



router.use(errorHandler);

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(400).json({ error: "Something went wrong!" });
}

module.exports = router;

const { UpdateTaskService } = require("../../service/Task/UpdateTaskService");

const UpdateTaskController = async (req, res) => {
  const { pending, inProgress, ready } = req.body;

  const { id } = req.params;

  const task = await UpdateTaskService(pending, inProgress, ready, id);

  res.status(200).json({ task });
};

module.exports = { UpdateTaskController };

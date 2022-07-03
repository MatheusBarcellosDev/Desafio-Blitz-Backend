const { UpdateTaskService } = require("../../service/Task/UpdateTaskService");

const UpdateTaskController = async (req, res) => {
  const taskUpdate = await UpdateTaskService(req.body);

  res.status(200).json({ taskUpdate });
};

module.exports = { UpdateTaskController };

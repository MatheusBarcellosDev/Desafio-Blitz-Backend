const { DeleteTaskService } = require("../../service/Task/DeleteTaskService");

const DeleteTaskController = (req, res) => {
  const { id } = req.params;

  const task = DeleteTaskService(id);

  return res.status(200).json({ message: "Task deleted" });
};

module.exports = { DeleteTaskController };

const { CreateTaskService } = require("../../service/Task/CreateTaskService");

const createTaskController = async (req, res) => {
  const { content, pending, inProgress, ready } = req.body;

  const userId = req.user_id;

  const task = await CreateTaskService(
    content,
    pending,
    inProgress,
    ready,
    userId
  );

  return res.status(200).json(task);
};

module.exports = { createTaskController };

const { ListTaskService } = require("../../service/Task/ListTaskService");

const ListTaskController = async (req, res) => {
  const userId = req.user_id;

  const tasks = await ListTaskService(userId);

  return res.status(200).json({ tasks });
};

module.exports = { ListTaskController };

const { Task } = require("../../../models");

const UpdateTaskService = async (task) => {
  try {
    const taskUpdate = await Task.update(task, {
      where: {
        id: task.id,
      },
    });
    return taskUpdate;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { UpdateTaskService };

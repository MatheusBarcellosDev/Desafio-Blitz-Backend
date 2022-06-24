const { Task } = require("../../../models");

const UpdateTaskService = async (pending, inProgress, ready, id) => {
  const newTask = {
    pending,
    inProgress,
    ready,
  };

  try {
    const task = await Task.update(newTask, {
      where: {
        id,
      },
    });

    console.log(task);

    return newTask;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { UpdateTaskService };

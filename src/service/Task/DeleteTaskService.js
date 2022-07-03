const { Task } = require("../../database/models");

const DeleteTaskService = async (id) => {
  try {
    const task = await Task.destroy({
      where: {
        id,
      },
    });

    return task;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { DeleteTaskService };

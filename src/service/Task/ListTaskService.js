const { Task } = require("../../database/models");

const ListTaskService = async (id) => {
  try {
    const tasks = await Task.findAll({
      where: {
        userId: id,
      },
    });
    return tasks;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { ListTaskService };

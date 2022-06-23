const { Task } = require("../../../models");

const DeleteTaskService = (id) => {
  try {
    const task = Task.destroy({
      where: {
        id,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { DeleteTaskService };

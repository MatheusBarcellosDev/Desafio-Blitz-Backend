const { Task } = require("../../../models");

const CreateTaskService = async (
  content,
  pending,
  inProgress,
  ready,
  userId
) => {
  try {
    const task = await Task.create({
      content,
      userId,
      pending,
      inProgress,
      ready,
    });

    return task;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { CreateTaskService };

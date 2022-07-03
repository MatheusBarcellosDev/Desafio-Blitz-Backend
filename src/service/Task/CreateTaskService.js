const { Task } = require("../../database/models");

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
      published: Date.now(),
      updated: Date.now(),
    });

    return task;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { CreateTaskService };

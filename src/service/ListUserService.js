const { User } = require("../../models");

const listUserService = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    return { error: "Error to list users" };
  }
};

module.exports = { listUserService };

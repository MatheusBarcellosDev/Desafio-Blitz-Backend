const { User } = require("../../../models");

const listUserService = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { listUserService };

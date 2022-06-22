const { User } = require("../../models");

const listUserService = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = { listUserService };

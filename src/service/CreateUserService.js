const { User } = require("../../models");

const createUserService = async (name, email, password) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) return { error: "Email already exists" };

  const user = await User.create({ name, email, password });

  return user;
};

module.exports = { createUserService };

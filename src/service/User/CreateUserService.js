const { User } = require("../../database/models");
const { hash } = require("bcryptjs");

const createUserService = async (name, email, password) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) return { error: "Email already exists" };

  const passWordHash = await hash(password, 8);

  const user = await User.create({ name, email, password: passWordHash });

  return user;
};

module.exports = { createUserService };

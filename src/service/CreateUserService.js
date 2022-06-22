const { User } = require("../../models");

const createUserService = async (name, email, password) => {
  const user = await User.findOne({ where: { email } });

  console.log(user);

  /*  if (emailExists) return { error: "Email already exists" };

  const user = await User.create({ name, email, password });

  return user; */
};

module.exports = { createUserService };

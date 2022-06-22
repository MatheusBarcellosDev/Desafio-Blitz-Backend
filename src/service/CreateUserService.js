const User = require("../models/user");

const createUser = async (name, email, password) => {
  const emailExists = await User.findOne({ email });

  if (emailExists) return { error: "Email already exists" };

  const user = await User.create({ name, email, password });

  return user;
};

module.exports = createUser;

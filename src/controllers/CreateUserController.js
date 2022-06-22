const userService = require("../service/CreateUserService");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userService(name, email, password);

  return res.status(200).json(user);
};

module.exports = { createUser };

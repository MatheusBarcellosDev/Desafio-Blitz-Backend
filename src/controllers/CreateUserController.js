const { createUserService } = require("../service/CreateUserService");

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await createUserService(name, email, password);

  return res.status(200).json(user);
};

module.exports = { createUserController };

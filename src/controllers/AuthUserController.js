const { authUserService } = require("../service/AuthUserService");

const authUserController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authUserService(email, password);

  console.log(user);

  return res.status(200).json(user);
};

module.exports = { authUserController };

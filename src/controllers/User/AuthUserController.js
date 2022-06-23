const { authUserService } = require("../../service/User/AuthUserService");

const authUserController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authUserService(email, password);

  return res.status(200).json(user);
};

module.exports = { authUserController };

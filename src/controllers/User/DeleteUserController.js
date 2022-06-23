const { DeleteUserService } = require("../../service/User/DeleteUserService");

const DeleteUserController = (req, res) => {
  const { id } = req.params;

  const user = DeleteUserService(id);

  return res.status(200).json({ message: "User deleted" });
};

module.exports = { DeleteUserController };

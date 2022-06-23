const { listUserService } = require("../../service/User/ListUserService");

const ListUserController = async (req, res) => {
  const listUser = await listUserService();

  return res.status(200).json(listUser);
};

module.exports = { ListUserController };

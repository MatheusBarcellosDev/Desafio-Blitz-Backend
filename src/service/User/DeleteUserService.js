const { User } = require("../../../models");

const DeleteUserService = async (id) => {
  try {
    const user = await User.destroy({
      where: {
        id,
      },
    });

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { DeleteUserService };

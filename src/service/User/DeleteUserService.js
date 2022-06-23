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
    console.log(err);
  }
};

module.exports = { DeleteUserService };

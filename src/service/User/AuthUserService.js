const { User } = require("../../../models");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const authUserService = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("User/password invalid");
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("User/password invalid");
  }

  const token = sign(
    {
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      subject: String(user.id),
      expiresIn: "30d",
    }
  );

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token: token,
  };
};

module.exports = { authUserService };

const { verify } = require("jsonwebtoken");

const isAuthenticate = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET);

    console.log(sub);

    req.user_id = sub.id;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
};

module.exports = { isAuthenticate };

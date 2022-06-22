const Joi = require("joi");

const validadeBody = (body) =>
  Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }).validate(body);

const validateUserCreate = (req, res, next) => {
  const { error } = validadeBody(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = { validateUserCreate };

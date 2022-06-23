const Joi = require("joi");

const validadeBody = (body) =>
  Joi.object({
    content: Joi.string().required(),
    pending: Joi.boolean().required(),
    inProgress: Joi.boolean().required(),
    ready: Joi.boolean().required(),
  }).validate(body);

const validateTaskCreate = (req, res, next) => {
  const { error } = validadeBody(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = { validateTaskCreate };

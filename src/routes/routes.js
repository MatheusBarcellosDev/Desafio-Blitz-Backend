const express = require("express");

const userController = require("../controllers/CreateUserController");
const validateUser = require("../middlewares/userValidate");

const routes = express.Router();

routes.post(
  "/session",
  validateUser.validateUserCreate,
  userController.createUser
);

module.exports = routes;

const express = require("express");

const { createUserController } = require("../controllers/CreateUserController");
const validateUser = require("../middlewares/userValidate");

const routes = express.Router();

routes.post("/users", validateUser.validateUserCreate, createUserController);

module.exports = routes;

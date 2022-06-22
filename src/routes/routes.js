const express = require("express");

const { createUserController } = require("../controllers/CreateUserController");
const { authUserController } = require("../controllers/AuthUserController");

const validateUser = require("../middlewares/userValidate");

const routes = express.Router();

//-- User routes --//
routes.post("/users", validateUser.validateUserCreate, createUserController);
routes.post("/session", authUserController);

module.exports = routes;

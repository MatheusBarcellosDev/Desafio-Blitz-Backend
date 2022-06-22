const express = require("express");

const { createUserController } = require("../controllers/CreateUserController");
const { authUserController } = require("../controllers/AuthUserController");
const { ListUserController } = require("../controllers/ListUserController");

const validateUser = require("../middlewares/userValidate");
const { isAuthenticate } = require("../middlewares/isAuthenticate");

const routes = express.Router();

//-- User routes --//
routes.post("/users", validateUser.validateUserCreate, createUserController);
routes.post("/session", authUserController);
routes.get("/users", isAuthenticate, ListUserController);

module.exports = routes;

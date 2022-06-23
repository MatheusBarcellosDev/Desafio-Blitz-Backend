const express = require("express");

const {
  createUserController,
} = require("../controllers/User/CreateUserController");
const {
  authUserController,
} = require("../controllers/User/AuthUserController");
const {
  ListUserController,
} = require("../controllers/User/ListUserController");
const {
  DeleteUserController,
} = require("../controllers/User/DeleteUserController");
const {
  createTaskController,
} = require("../controllers/Task/CreateTaskController");

const validateUser = require("../middlewares/userValidate");
const { isAuthenticate } = require("../middlewares/isAuthenticate");
const { validateTaskCreate } = require("../middlewares/taskValidate");

const routes = express.Router();

//-- User routes --//
routes.post("/users", validateUser.validateUserCreate, createUserController);
routes.post("/session", authUserController);
routes.get("/users", isAuthenticate, ListUserController);
routes.delete("/users/:id", isAuthenticate, DeleteUserController);

//-- Task routes --//
routes.post("/task", isAuthenticate, validateTaskCreate, createTaskController);

module.exports = routes;

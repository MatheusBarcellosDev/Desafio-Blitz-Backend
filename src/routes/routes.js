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

const {
  DeleteTaskController,
} = require("../controllers/Task/DeleteTaskController");

const { validateUserCreate } = require("../middlewares/userValidate");
const { isAuthenticate } = require("../middlewares/isAuthenticate");
const { validateTaskCreate } = require("../middlewares/taskValidate");

const routes = express.Router();

//-- User routes --//
routes.post("/users", validateUserCreate, createUserController);
routes.post("/session", authUserController);
routes.get("/users", isAuthenticate, ListUserController);
routes.delete("/users/:id", isAuthenticate, DeleteUserController);

//-- Task routes --//
routes.post("/task", isAuthenticate, validateTaskCreate, createTaskController);
routes.delete("/task/:id", isAuthenticate, DeleteTaskController);

module.exports = routes;

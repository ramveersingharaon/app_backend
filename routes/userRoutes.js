const express = require("express");
const userRouter = express.Router();
const { register, login, currentUser } = require("../controllers/user");
const auth = require("../middleware/auth");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/current-user", auth, currentUser);

module.exports = userRouter;

import express from "express";
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send("User Index"));
userRouter.get(routes.editProfile, (req, res) => res.send("User Edit"));
userRouter.get(routes.changePassword, (req, res) => res.send("User Password"));
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));

export default userRouter;

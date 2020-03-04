import express from "express";
import routes from "../routes";
import {
    changePassword,
    userDetail,
    getEditProfile,
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

// userRouter.get(routes.home, users);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
export default userRouter;

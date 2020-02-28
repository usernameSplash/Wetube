import express from "express";
import routes from "../routes";
import {
    changePassword,
    editProfile,
    userDetail,
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

// userRouter.get(routes.home, users);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

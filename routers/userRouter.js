import express from "express";
import routes from "../routes";
import {
    changePassword,
    userDetail,
    getEditProfile,
    postEditProfile,
} from "../controller/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

// userRouter.get(routes.home, users);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
export default userRouter;

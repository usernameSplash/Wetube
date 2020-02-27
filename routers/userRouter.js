import express from "express";
import routes from "../routes";
import {
    changePassword,
    editProfile,
    userDetail,
} from "../controller/userController";

const userRouter = express.Router();

// userRouter.get(routes.home, users);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

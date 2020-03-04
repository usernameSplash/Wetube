import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import {
    logout,
    getJoin,
    getLogin,
    postJoin,
    postLogin,
    githubLogin,
    postGithubLogIn,
    getMe,
    fbLogin,
    postFbLogin,
    kakaoLogin,
    postKakaoLogin,
} from "../controller/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
    routes.githubCallback,
    passport.authenticate("github", { failureRedirect: "/login" }),
    postGithubLogIn,
);

globalRouter.get(routes.fb, fbLogin);
globalRouter.get(
    routes.fbCallback,
    passport.authenticate("facebook", {
        failureRedirect: "/login",
        failWithError: true,
    }),
    postFbLogin,
);

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
    routes.kakaoCallback,
    passport.authenticate("kakao", {
        failureRedirect: "/login",
    }),
    postKakaoLogin,
);

globalRouter.get(routes.me, onlyPrivate, getMe);

export default globalRouter;

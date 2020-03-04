import passport from "passport";
import GithubStrategy from "passport-github";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import {
    githubLoginCallback,
    kakaoLoginCallback,
} from "./controller/userController";
import routes from "./routes";

passport.use(User.createStrategy());
passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: `http://localhost:4000${routes.githubCallback}`,
        },
        githubLoginCallback,
    ),
);

passport.use(
    new KakaoStrategy(
        {
            clientID: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
            callbackURL: `http://localhost:4000${routes.kakaoCallback}`,
        },
        kakaoLoginCallback,
    ),
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

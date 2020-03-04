import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import {
    githubLoginCallback,
    fbLoginCallback,
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
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: `https://4f9cc1c1.ngrok.io${routes.fbCallback}/`,
            profileFields: ["id", "displayName", "photos", "email"],
            scope: ["public_profile", "email"],
        },
        fbLoginCallback,
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

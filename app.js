import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Wetube");
const handleProfile = (req, res) => res.send("Profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;

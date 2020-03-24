import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.register, postRegisterView);

export default apiRouter;

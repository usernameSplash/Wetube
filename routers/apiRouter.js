import express from "express";
import routes from "../routes";
import {
    postRegisterView,
    postAddComment,
    postDeleteComment,
} from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.register, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.deleteComment, postDeleteComment);

export default apiRouter;

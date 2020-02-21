import express from "express";
import routes from "../routes";
import {
    editVideo,
    deleteVideo,
    videoDetail,
    getUpload,
    postUpload,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";
const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;

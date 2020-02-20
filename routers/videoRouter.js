import express from "express";
import routes from "../routes";
import {
    uploadVideo,
    editVideo,
    deleteVideo,
    videoDetail,
} from "../controller/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.upload, uploadVideo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;

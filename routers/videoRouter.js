import express from "express";
import routes from "../routes";
import {
    editVideo,
    deleteVideo,
    videoDetail,
    getUpload,
    postUpload,
} from "../controller/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;

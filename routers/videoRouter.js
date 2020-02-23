import express from "express";
import routes from "../routes";
import {
    deleteVideo,
    videoDetail,
    getUpload,
    postUpload,
    getEditVideo,
    postEditVideo,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";
const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// DeleteVideo
videoRouter.get(routes.deleteVideo, deleteVideo);

videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;

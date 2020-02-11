import express from "express";
import routes from "../routes";
const videoRouter = express.Router();

videoRouter.get(routes.home, (req, res) => res.send("Video"));
videoRouter.get(routes.upload, (req, res) => res.send("Uplad Video"));
videoRouter.get(routes.editVideo, (req, res) => res.send("Edit Video"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("Delete Video"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));

export default videoRouter;

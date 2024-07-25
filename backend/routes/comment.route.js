import express from "express";
import {
  addReply,
  createComment,
  deleteComment,
  editComment,
} from "../controllers/comment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const commentRouter = express.Router();

commentRouter.post("/create-comment/:postId", verifyJWT, createComment);
commentRouter.post("/add-reply/:commentId", verifyJWT, addReply);
commentRouter.patch("/edit-comment/:commentId", verifyJWT, editComment);
commentRouter.delete("/delete-comment/:commentId", verifyJWT, deleteComment);

export default commentRouter;

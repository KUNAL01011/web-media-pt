import express from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';
import { createPost, deletePost, updatePost } from '../controllers/post.controller.js';

const postRouter = express.Router();


postRouter.post("/create-post",verifyJWT,upload.single("postMedia"),createPost);
postRouter.patch("/update-post",verifyJWT,upload.single("postMedia"),updatePost);
postRouter.delete("/delete-post/:postId",verifyJWT,deletePost);


export default postRouter;
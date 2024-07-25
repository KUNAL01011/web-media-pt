import express from 'express'
import { updatePassword, updateProfile, updateUserAvatar, updateUserCoverImg } from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

const userRouter = express.Router();

userRouter.post('/update-profile',verifyJWT,updateProfile);
userRouter.post('/update-password',verifyJWT,updatePassword);
userRouter.post('/update-avatar',verifyJWT,upload.single('avatar'),updateUserAvatar);
userRouter.post('/update-coverImage',verifyJWT,upload.single('coverImage'),updateUserCoverImg);

export default userRouter
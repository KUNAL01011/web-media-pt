import express from 'express';
import { getMe, login, logout, register } from '../controllers/auth.controller.js';
import {verifyJWT} from '../middlewares/auth.middleware.js'
const authRouter = express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',verifyJWT,logout);
authRouter.get('/me',verifyJWT,getMe);

export default authRouter

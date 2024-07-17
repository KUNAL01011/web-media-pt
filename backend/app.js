import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));
app.use(express.json({limit:'5MB'}));
app.use(express.urlencoded({extended:true,limit:"5MB"}));
app.use(express.static("localFile"));
app.use(cookieParser());


//routes 
import authRouter from './routes/auth.route.js';

app.use("/api/v1/auth",authRouter);

export {app};
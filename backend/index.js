import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/connection.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config({
  path: "./.env",
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDB().then(() => {
  try {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("MONGO db connection failed !!! ", error);
  }
});

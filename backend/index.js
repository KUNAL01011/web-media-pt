import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './db/connection.js';

dotenv.config({
    path:'./.env'
});


connectDB().then(() => {
    try {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("MONGO db connection failed !!! ", error);
    }
})


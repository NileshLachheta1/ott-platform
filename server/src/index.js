import dotenv from "dotenv"
import connectDB from "./config/db.config.js";
import { app } from './app.js'

dotenv.config({
    path: "./.env"
})
const PORT = process.env.PORT || 8000;



connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port : ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })
import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        const connectionDbInstance = mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("MongoDB is Connected Successfully")
    } catch (error) {
        console.log("MongoDB Connection Error : ", error)
    }
}
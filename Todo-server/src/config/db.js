import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI);
        console.log("Mongodb connected");
    } catch (error) {
        console.error("Database Connection error")
        process.exit(1);
    }
};
export default connectDb;
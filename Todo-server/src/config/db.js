import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connectdb = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`MongoDB conneted!! DB host:${connectdb.connection.host}`);
    } catch (error) {
        console.error("Database Connection error")
        process.exit(1);
    }
};
export default connectDb;
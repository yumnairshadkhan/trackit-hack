import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();

const connectToMongoDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        await mongoose.connect("mongodb://localhost:27017/task_app");
        console.log("Connected to MongoDb")
    } catch (error) {
        console.log("Error connecting to MongoDb", error.message);
    }
}

export default connectToMongoDB;
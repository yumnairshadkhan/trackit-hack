import express from "express";
import cors from 'cors';
import connectToMongoDB from "./DB/db.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use("/api/auth", authRouter);
app.use("/api/task", authRouter);

app.listen(5000, () => {
    connectToMongoDB();
    console.log(`Server started`)
})

export default app;

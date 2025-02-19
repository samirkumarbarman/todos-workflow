import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import app from "./src/app.js"
import connectDb from "./src/config/db.js";


dotenv.config();

connectDb();

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors);

server.use(app);

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost${PORT}`);
});
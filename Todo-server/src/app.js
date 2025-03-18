import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import errorHandler from "./middlewares/errorHandeler.js";
import connectDb from "./config/db.js";

dotenv.config();
connectDb();

const app = express();

app.use(express.json());

app.use('/api/v1/todos', todoRoutes);

app.use(errorHandler);

export default app;


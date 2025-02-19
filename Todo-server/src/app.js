import express from "express";
import todoRoutes from "./routes/todoRoutes.js";
// import errorHandeler from "./middlewares/errorHandeler.js";

const app = express();

app.use(express.json());

app.use('/api/v1/todos', todoRoutes);

// errorHandeler();

export default app;


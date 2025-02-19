import express from "express";
import { getTodos, getTodoById, createTodos, updateTodos, deleteTodos } from "../controllers/todoController.js";

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getTodoById);
router.post('/', createTodos);
router.put('/:id', updateTodos);
router.delete('/:id', deleteTodos);

export default router;
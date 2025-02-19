import Todo from "../models/todoModels.js";

//Get all todos
export const getTodos = async (req, res ) => {
    try {
        const todos = Todo.find();
        res.staus(200).json(todos);
    } catch (error) {
        console.error("Server error");
        res.staus(500).json({message:"Server error"});
    }
};

//Get Todos by Id
export const getTodoById = async (req, res) => {
    try {
        const todo = Todo.findById(req.params.id);
        if(!todo){
            return res.staus(404).json({message:"Todo not found"});
        }
        res.staus(200).json(todo);
    } catch (error) {
        console.error("Server error");
        res.staus(500).json({message:"Server error"});
    }
};

//Create new Todos
export const createTodos = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = new Todo({title, description});
        new todo.save();
        res.staus(200).json(todo);
    } catch (error) {
        console.error("Server error");
        res.status(500).json({message:"Server error"});
    }
};

//Ipdate todos
export const updateTodos = async (req, res) => {
    try {
        const { id } = req.params;  
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Delete todos
export const deleteTodos = async (req, res) => {
    try {
        const { id } = req.params;  
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
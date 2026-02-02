const express = require('express');
const mongoose = require('mongoose'); // 1. Import Mongoose
const app = express();
const PORT = 3000;

app.use(express.json());

// 2. Connect to MongoDB (Compass uses this local URL)
// 'todoDB' is the name of the database that will be created automatically
mongoose.connect('mongodb://127.0.0.1:27017/todoDB')
    .then(() => console.log("Connected to MongoDB Compass..."))
    .catch(err => console.error("Could not connect to MongoDB:", err));


const taskSchema = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);



app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    console.log("Current Tasks in DB:", tasks);
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    try {
        const newTask = new Task({
            task: req.body.task
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            { completed: req.body.completed }, 
            { new: true } 
        );
        res.json(updatedTask);
    } catch (error) {
        res.status(404).json({ message: "Task not found" });
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: "Task not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

const DATA_FILE = './package.json';

function loadTodos() {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
}

function saveTodos(todos) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

app.get('/api/todos', (req, res) => {
    const todos = loadTodos();
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const todos = loadTodos();
    const newTodo = {
        id: Date.now(),
        text: req.body.text || '',
        done: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
    const todos = loadTodos();
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return res.status(404).json({ message: 'Not found' });

    todos[index] = { ...todos[index], ...req.body };
    saveTodos(todos);
    res.json(todos[index]);
});

app.delete('/api/todos/:id', (req, res) => {
    const todos = loadTodos();
    const newTodos = todos.filter(todo => todo.id !== parseInt(req.params.id));
    if (newTodos.length === todos.length) {
        return res.status(404).json({ message: 'Not found' });
    }
    saveTodos(newTodos);
    res.json({ message: 'Deleted' });
});

app.listen(PORT, () => {
    console.log(` The server is running on http://localhost:${PORT}`);
});
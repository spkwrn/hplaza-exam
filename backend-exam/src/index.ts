import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
}

let todos: Todo[] = [];
let currentId = 1;

app.post('/todos', (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTodo: Todo = { id: currentId++, title, description, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.get('/todos', (req: Request, res: Response) => {
    res.json(todos);
});

app.get('/todos/:id', (req: Request, res: Response) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ message: 'Todo item not found' });
    }
    res.json(todo);
});

app.put('/todos/:id', (req: Request, res: Response) => {
    const { title, description, completed } = req.body;
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ message: 'item not found' });
    }
    if (title) todo.title = title;
    if (description) todo.description = description;
    if (typeof completed === 'boolean') todo.completed = completed;

    res.json(todo);
});

app.delete('/todos/:id', (req: Request, res: Response) => {
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Todo list API listening at http://localhost:${port}`);
});

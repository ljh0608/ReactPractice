const cors = require('cors');

const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors());

let id = 2;
const todoList = [
    {
        id: 1,
        text: '할일 1',
        done: false,
    },
];

app.get('/api/todo', (req, res) => {
    res.json(todoList);
});

app.post('/api/todo', (req, res) => {
    const { text, done } = req.body;
    console.log(req.body);
    todoList.push({
        id: id++,
        text,
        done,
    });
    return res.send('success');
});

app.listen(3002, () => {
    console.log('server start');
});

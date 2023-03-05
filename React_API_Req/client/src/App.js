import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
    const [todoList, setTodoList] = useState(null);

    const fetchData = () => {
        fetch('http://localhost:3002/api/todo')
            .then((response) => response.json())
            .then((data) => setTodoList(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onSubmithandler = (e) => {
        const text = e.target.text.value;
        const done = e.target.done.checked;
        e.preventDefault();

        fetch('http://localhost:3002/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text,
                done,
            }),
        }).then(() => fetchData());
    };
    return (
        <div className="App">
            <h1>TODO LIST</h1>
            <form onSubmit={onSubmithandler}>
                <input name="text"></input>
                <input name="done" type="checkbox" />
                <input type="submit" value="추가" />
            </form>
            {todoList?.map((todo) => (
                <div key={todo.id} style={{ display: 'flex' }}>
                    <div>{todo.id}</div>
                    <div>{todo.text}</div>
                    <div>{todo.done ? 'Y' : 'N'}</div>
                </div>
            ))}
        </div>
    );
}

export default App;

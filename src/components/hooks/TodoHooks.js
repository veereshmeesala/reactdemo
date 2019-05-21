import React from 'react';
import { useArray } from 'react-hanger';

const TodoHooks = () => {
    const todos = useArray(['hi there', 'sup']);
    return (
        <div>
            <h1>Todos</h1>
            <button onClick={() => todos.add(Math.random())}>Add</button>
            <ul>
                {todos.value.map((todo, i) => (
                    // eslint-disable-next-line no-unused-expressions
                    <li key={i}>{todo}
                    <button onClick={() => todos.removeIndex(i)}>Delete</button>
                    </li>)
                )}
            </ul>
            <button onClick={todos.clear}>Clear</button>
        </div>
    );
};

export default TodoHooks;
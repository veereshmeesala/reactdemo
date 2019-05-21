import React, { useState, useReducer } from 'react';

const initialTodos = [
    {
        id: 1,
        task: 'Learn React',
        complete: true
    },
    {
        id: 2,
        task: 'Learn Angular',
        complete: false
    },
    {
        id: 3,
        task: 'Learn C#',
        complete: false
    }
];

const actionType = {
    SHOW_ALLALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_INCOMPLETE: 'SHOW_INCOMPLETE',
    TASK_COMPLETE: 'TASK_COMPLETE',
    TASK_INCOMPLETE: 'TASK_INCOMPLETE',
    ADD_TODO: 'ADD_TODO'
}

const todoReducer = (state, action) => {
    switch(action.type) {
        case 'TASK_COMPLETE': 
        console.log(action.payLoad);
            return state.map(list => {
                if(list.id === action.payLoad.id) {
                    return { ...list, complete: true};
                } else {
                    return list;
                }
            });
        case 'TASK_INCOMPLETE': 
            return state.map(list => {
                if(list.id === action.payLoad.id) {
                    return { ...list, complete: false };
                } else {
                    return list;
                }
            });
        case 'ADD_TODO':
            return state.concat({
                task: action.payLoad.task,
                id: action.payLoad.id,
                complete: action.payLoad.complete,
            });
        default:
        throw new Error();
    }
}

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    // const [todos, setTodos] = useState(initialTodos);
    const [task, setTask] = useState('');
    const handleChangeInput = event => {
        setTask(event.target.value);
    }

     const handleChangeCheckbox = (todo) => {
                if(todo.complete === false){
                    dispatch({type: actionType.TASK_INCOMPLETE, payLoad: todo.id});
                }
                else {
                    dispatch({type: actionType.TASK_COMPLETE, payLoad: todo.id});
                }
    };

    const handleSubmit = event => {
        if(task) {
            const count = state.length;
            // setTodos(todos.concat({id: count + 1, task, complete: false}));
            dispatch({type: actionType.ADD_TODO, payLoad: {id: count + 1, task, complete: false}})
        }
        setTask('');
        event.preventDefault();
    }

    const handleShowAll = () => {

    }

    const handleShowComplete = () => {

    }

    const handleShowIncomplete = () => {

    }
    return (<div>
        <button type="button" onClick={handleShowAll}>ShowAll</button>
        <button type="button" onClick={handleShowComplete}>Show Complete</button>
        <button type="button" onClick={handleShowIncomplete}>Show Incomplete</button>
        <ul>
        {state.map(todo => (
        <li key={todo.id}>
          <label>
          <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckbox(todo)}
              />
          {todo.task}</label>
        </li>
      ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChangeInput} />
            <br />
            <button type="submit">Add TodoList</button>
        </form>
    </div>)
}

export default TodoList;
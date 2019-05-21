import React, { useReducer } from 'react';


const initialState = {
    count: 0
}
const ActionTypes = {
    INCREMENT : 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

const reducer = (state, action) => {
 switch(action.type) {
     case ActionTypes.INCREMENT : 
        return {...state, count: state.count + 1};
    case ActionTypes.DECREMENT: 
        return {...state, count: state.count -1 };
    default: 
        return state;
 }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
        <h1>Counter Example using Hooks - useReducer</h1>
        <p>Count : {state.count}</p>
        <button onClick={() => dispatch({type: ActionTypes.INCREMENT})}>+</button>
        <button onClick={() => dispatch({type: ActionTypes.DECREMENT})}>-</button>
        </>
    );
}
export default Counter;


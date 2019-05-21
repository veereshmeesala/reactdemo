import React, { useState, useEffect } from 'react';



const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

const componentName = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    const handleClick = () => {
        setCount(count + 1);
        setTime(new Date());
    }
    useEffect(() => {
        console.log('useEffect first timer here');
        const clicked = () => console.log('window clicked');
        window.addEventListener('click', clicked);
        return () => {
            window.removeEventListener('click', clicked);
        }
    }, []);
    // useEffect(() => {
    //     document.title = `you have clicked ${count}`;
    // }, [count]);
    useDocumentTitle(`you have clicked ${count}`);
    return (
        <div>
            <h1>Welcome to the counter of life</h1>
            <button onClick={handleClick}>count - {count}</button>
            <p>at: {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
        </div>
    )
}

export default componentName
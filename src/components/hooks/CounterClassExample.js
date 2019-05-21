import React from 'react';

class CounterExample extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Welcome to the counter of life</h1>
                <button onClick={this.handleClick}>count - {count}</button>
            </div>
        );
    }
}

export default CounterExample;
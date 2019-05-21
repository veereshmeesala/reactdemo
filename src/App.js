import React, { Component } from 'react';
// import MyComponent from './components/recompose/MyComponent';
// import Example from './components/hooks/Example';
// import CounterHooks from './components/hooks/CounterHooks';
// import TodoHooks from './components/hooks/TodoHooks';
// import SignUpForm from './components/hooks/SignUpForm';
// import logo from './logo.svg';
// import Loadable from 'react-loadable';
// import Counter from './components/hooks/Counter-useReducer';
import TodoList from './components/hooks/todoListExample/TodoList';
import './App.css';


// const SignUpForm = React.lazy(() => import('./components/hooks/SignUpForm'));

// const LoadableSignUpForm = Loadable({
//   loader: () => import('./components/hooks/SignUpForm-useFormState'),
//   loading() {
//     return <div>Loading...</div>
//   }
// });


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <React.Suspense fallback={<div>Loading...</div>}>
          <SignUpForm />
        </React.Suspense> */}
        
        <TodoList />
      </div>
    );
  }
}

export default App;

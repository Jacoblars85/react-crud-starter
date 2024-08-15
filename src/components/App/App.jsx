import React from 'react';
import Todo from '../Todo/Todo.jsx';
import './App.css';

function App (){
  return(
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React!</h1>
      </header>
      <Todo />
    </div>
  )
}

export default App;

import React from 'react';
import TodoForm from '../TodoForm/TodoForm.jsx';
import TodoList from '../TodoList/TodoList.jsx';

function Garden() {
  return(
    <div>
      <h2>This is the garden!</h2>
      {/* Redux State isn't needed in the garden, it is just a parent component */}
      {/* Thanks to redux, there is no need to pass along props! */}
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Garden;

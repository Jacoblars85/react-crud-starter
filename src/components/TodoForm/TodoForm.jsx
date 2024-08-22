import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newTodo, setTodo] = useState();

    const addNewTodo = event => {

    }
    
    return (
        <div>
            <h3>This is the form</h3>

            <p>{newTodo}</p>

            <form onSubmit={addNewTodo}>
                <input type='submit' value='Add New todo' />
            </form>
        </div>
    );
}


export default TodoForm;

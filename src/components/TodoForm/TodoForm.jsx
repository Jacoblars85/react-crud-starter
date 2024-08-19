import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newTodo, setTodo] = useState({id: 4, name: ''});

    const handleNameChange = (event) => {

    }

    const addNewTodo = event => {

    }
    return (
        <div>
            <h3>This is the form</h3>
            <pre>{JSON.stringify(newTodo)}</pre>
            <form onSubmit={addNewTodo}>
                <input type='submit' value='Add New todo' />
            </form>
        </div>
    );
}


export default TodoForm;

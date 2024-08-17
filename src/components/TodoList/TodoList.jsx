import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function TodoList() {
    const dispatch = useDispatch();

    const reduxState = useSelector(store => store);

    useEffect(() => {
        // dispatch an action to request the plantList from the API
    }, []); 

    return (
        <div>
            <h3>This is the todo list</h3>
            <pre>{JSON.stringify(reduxState)}</pre>
        </div>
    );
}

export default TodoList;

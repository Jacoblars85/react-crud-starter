import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function BasicList() {
    const dispatch = useDispatch();

    useEffect(() => {

    }, []); 

    return (
        <div>
            <h3>This is the todo list</h3>
        </div>
    );
}

export default BasicList;

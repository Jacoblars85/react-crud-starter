import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const BasicForm = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>This is the form</h3>

            <p>type stuff here</p>
        </div>
    );
}


export default BasicForm;

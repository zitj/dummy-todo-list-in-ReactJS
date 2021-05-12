import React from 'react';
import './Task.css';

const Task = (props) => {
    const deleteDataHandler = (event) => {
        props.onDelete(props.id);
    };
    return (
        <li>
            {props.name}

            <div className="buttons">
                <button className="editBtn">✏️</button>
                <button className="deleteBtn" onClick={deleteDataHandler}>
                    ❌
                </button>
            </div>
        </li>
    );
};

export default Task;

import React, { useState } from 'react';
import './Task.css';

const Task = (props) => {
    let [showEditTaskInput, setShowEditTaskInput] = useState(false);
    let [editBtn, setEditBtn] = useState('✏️');

    const deleteDataHandler = (event) => {
        props.onDelete(props.id);
    };
    const editDataHandler = (event) => {
        if (!showEditTaskInput) {
            setEditBtn('✔️');
        } else {
            setEditBtn('✏️');
        }
        return showEditTaskInput
            ? setShowEditTaskInput(false)
            : setShowEditTaskInput(true);
    };

    const editTaskInput = <input type="text" className="editTaskInput" />;

    return (
        <li>
            {props.name}

            <div className="buttons">
                <button className="editBtn" onClick={editDataHandler}>
                    {editBtn}
                </button>
                <button className="deleteBtn" onClick={deleteDataHandler}>
                    ❌
                </button>
            </div>
            {showEditTaskInput ? editTaskInput : null}
        </li>
    );
};

export default Task;

import React, { useState } from 'react';
import './style/Task.css';

const Task = (props) => {
    let [showEditTaskInput, setShowEditTaskInput] = useState(false);
    let [editBtn, setEditBtn] = useState('✏️');
    let [editTaskInput, setEditTaskInput] = useState(props.name);

    const deleteDataHandler = (event) => {
        if (showEditTaskInput) {
            setShowEditTaskInput(false);
            // setEditTaskInput(props.name);
            setEditBtn('✏️');
            return;
        }
        props.onDelete(props.id);
    };
    const editDataHandler = (event) => {
        if (!showEditTaskInput) {
            setEditBtn('✔️');
        } else {
            setEditBtn('✏️');
            props.onEdit(props.name, editTaskInput, props.id);
        }
        return showEditTaskInput
            ? setShowEditTaskInput(false)
            : setShowEditTaskInput(true);
    };

    const editTaskInputChange = (event) => {
        setEditTaskInput(event.target.value);
    };

    const editTaskInputElement = (
        <input
            type="text"
            className="editTaskInput"
            value={editTaskInput}
            onChange={editTaskInputChange}
        />
    );

    return (
        <li>
            {editTaskInput}

            <div className="buttons">
                <button className="editBtn" onClick={editDataHandler}>
                    {editBtn}
                </button>
                <button className="deleteBtn" onClick={deleteDataHandler}>
                    ❌
                </button>
            </div>
            {showEditTaskInput ? editTaskInputElement : null}
        </li>
    );
};

export default Task;

import React, { useState, useContext } from 'react';
import styles from './style/Task.module.css';
import NewTaskContext from '../../context/new-task-context';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Task = (props) => {
    const newTaskContext = useContext(NewTaskContext);

    let [showEditTaskInput, setShowEditTaskInput] = useState(false);
    let [editBtn, setEditBtn] = useState('✏️');
    let [editTaskInput, setEditTaskInput] = useState(props.name);

    const deleteTaskHandler = (event) => {
        if (showEditTaskInput) {
            setShowEditTaskInput(false);
            setEditTaskInput(props.name);
            setEditBtn('✏️');
            return;
        }
        newTaskContext.onDelete(props.id);
        console.log('Deleted');
    };
    const editTaskHandler = (event) => {
        if (!showEditTaskInput) {
            setEditBtn('✔️');
        } else {
            setEditBtn('✏️');
            newTaskContext.onEdit(props.name, editTaskInput, props.id);
        }
        return showEditTaskInput
            ? setShowEditTaskInput(false)
            : setShowEditTaskInput(true);
    };

    const editTaskInputChange = (event) => {
        setEditTaskInput(event.target.value);
    };

    return (
        <li>
            {editTaskInput}

            <div className={styles.buttons}>
                <Button
                    id="editBtn"
                    className={styles.dugme}
                    onClick={editTaskHandler}
                >
                    {editBtn}
                </Button>
                <Button id="deleteBtn" onClick={deleteTaskHandler}>
                    ❌
                </Button>
            </div>
            {showEditTaskInput ? (
                <Input
                    type="text"
                    className={styles.editTaskInput}
                    value={editTaskInput}
                    onChange={editTaskInputChange}
                ></Input>
            ) : null}
        </li>
    );
};

export default Task;

import React, { useState, useContext } from 'react';
import styles from './style/AddTaskForm.module.css';
import NewTaskContext from '../../context/new-task-context';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const AddTaskForm = (props) => {
    const newTaskContext = useContext(NewTaskContext);
    const [writtenTask, setWrittenTask] = useState('');

    const writeTask = (event) => {
        setWrittenTask(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();
        const task = {
            name: writtenTask,
            id: Date.now(),
        };
        console.log(task);
        setWrittenTask('');
        newTaskContext.onCreate(task);
    };

    return (
        <form action="submit" onSubmit={submitForm}>
            <label htmlFor="">Type here your new task</label>
            <Input type="text" onChange={writeTask} value={writtenTask}></Input>
            <Button type="submit" className={styles.dugme}>
                ➕
            </Button>
        </form>
    );
};

export default AddTaskForm;

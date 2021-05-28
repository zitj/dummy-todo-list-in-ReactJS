import React, { useState, useContext } from 'react';
import './style/AddTaskForm.css';
import NewTaskContext from '../../context/new-task-context';

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
            <input type="text" onChange={writeTask} value={writtenTask} />
            <button type="submit">Add new task</button>
        </form>
    );
};

export default AddTaskForm;

import React, { useState } from 'react';
import './AddTaskForm.css';

const AddTaskForm = (props) => {
    const [writtenTask, setWrittenTask] = useState('');

    const writeTask = (event) => {
        setWrittenTask(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();
        const task = {
            name: writtenTask,
            id: props.counterID,
        };
        setWrittenTask('');
        props.passData(task);
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

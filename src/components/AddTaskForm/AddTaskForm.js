import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = (props) => {
    return (
        <form action="submit">
            <label htmlFor="">Type here your new task</label>
            <input type="text" />
            <button type="submit">Add new task</button>
        </form>
    );
};

export default AddTaskForm;

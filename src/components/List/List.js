import React from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import './List.css';

const List = (props) => {
    return (
        <div className="wrapper">
            <h2>To do list</h2>
            <AddTaskForm></AddTaskForm>
        </div>
    );
};

export default List;

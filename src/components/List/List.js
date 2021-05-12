import React from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import AllTasks from '../AllTasks/AllTasks';
import './List.css';

const List = (props) => {
    return (
        <div className="wrapper">
            <h2>To do list</h2>
            <AddTaskForm></AddTaskForm>
            <AllTasks tasks={props.data}></AllTasks>
        </div>
    );
};

export default List;

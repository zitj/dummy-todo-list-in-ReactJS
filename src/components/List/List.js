import React from 'react';
import AllTasks from '../AllTasks/AllTasks';
import './List.css';

const List = (props) => {
    return (
        <div className="wrapper">
            <h2>To do list</h2>
            <AllTasks tasks={props.data}></AllTasks>
        </div>
    );
};

export default List;

import React from 'react';
import AllTasks from '../AllTasks/AllTasks';
import './style/List.css';

const List = (props) => {
    return (
        <div className="wrapper">
            <h2>To do list</h2>
            <AllTasks></AllTasks>
        </div>
    );
};

export default List;

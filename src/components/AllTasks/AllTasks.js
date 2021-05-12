import React from 'react';
import Task from '../Task/Task';
import './AllTasks.css';

const AllTasks = (props) => {
    const tasks = props.tasks.map((task) => (
        <Task key={task.id} name={task.name} />
    ));

    return (
        <div>
            <ul>{tasks}</ul>
        </div>
    );
};

export default AllTasks;

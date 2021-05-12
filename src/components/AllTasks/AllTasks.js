import React from 'react';
import Task from '../Task/Task';
import './AllTasks.css';

const AllTasks = (props) => {
    const deleteData = (data) => {
        console.log(`Task with id: ${data} has been deleted.`);
        props.deleteData(data);
    };
    const tasks = props.tasks
        .map((task) => (
            <Task
                key={task.id}
                name={task.name}
                id={task.id}
                onDelete={deleteData}
            />
        ))
        .reverse();

    return (
        <div>
            <ul>{tasks}</ul>
        </div>
    );
};

export default AllTasks;

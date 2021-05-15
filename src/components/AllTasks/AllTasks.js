import React from 'react';
import Task from '../Task/Task';
import './style/AllTasks.css';

const AllTasks = (props) => {
    const deleteData = (data) => {
        console.log(`Task with id: ${data} has been deleted.`);
        props.deleteData(data);
    };
    const editData = (arg1, arg2, arg3) => {
        props.editData(arg1, arg2, arg3);
    };
    const cancelData = (arg1, arg2) => {
        props.cancelData(arg1, arg2);
    };
    const tasks = props.tasks
        .map((task) => (
            <Task
                key={task.id}
                name={task.name}
                id={task.id}
                onDelete={deleteData}
                onEdit={editData}
                onCancel={cancelData}
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

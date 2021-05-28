import React, { Fragment, useContext } from 'react';
import Task from '../Task/Task';
import './style/AllTasks.css';
import NewTaskContext from '../../context/new-task-context';

const AllTasks = (props) => {
    const newTaskContext = useContext(NewTaskContext);

    const tasks = newTaskContext.tasks
        .map((task) => <Task key={task.id} name={task.name} id={task.id} />)
        .reverse();

    return (
        <Fragment>
            <ul>{tasks}</ul>
        </Fragment>
    );
};

export default AllTasks;

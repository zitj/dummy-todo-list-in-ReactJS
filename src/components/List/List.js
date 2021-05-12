import React from 'react';
import AllTasks from '../AllTasks/AllTasks';
import './List.css';

const List = (props) => {
    const deleteDataHandler = (arg) => {
        props.deleteDataHandler(arg);
    };
    return (
        <div className="wrapper">
            <h2>To do list</h2>
            <AllTasks
                tasks={props.data}
                deleteData={deleteDataHandler}
            ></AllTasks>
        </div>
    );
};

export default List;

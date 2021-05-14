import React from 'react';
import AllTasks from '../AllTasks/AllTasks';
import './List.css';

const List = (props) => {
    const deleteDataHandler = (arg) => {
        props.deleteDataHandler(arg);
    };
    const editDataHandler = (arg1, arg2, arg3) => {
        props.editDataHandler(arg1, arg2, arg3);
    };
    const cancelDataHandler = (arg1, arg2) => {
        props.cancelDataHandler(arg1, arg2);
    };
    return (
        <div className="wrapper">
            <h2>To do list</h2>
            <AllTasks
                tasks={props.data}
                deleteData={deleteDataHandler}
                editData={editDataHandler}
                cancelData={cancelDataHandler}
            ></AllTasks>
        </div>
    );
};

export default List;

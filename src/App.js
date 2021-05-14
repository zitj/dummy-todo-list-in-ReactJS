import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import List from './components/List/List';
const DUMMY_DATA = [
    {
        id: Date.now(),
        name: 'Learn ReactJS',
    },
];
function App() {
    const [data, setData] = useState(DUMMY_DATA);

    const dataTransfer = (data) => {
        setData((prevData) => {
            return [data, ...prevData];
        });
    };

    const deleteDataHandler = (taskId) => {
        setData((prevData) => {
            const updatedData = prevData.filter((task) => task.id !== taskId);
            return updatedData;
        });
    };

    const editDataHandler = (taskName, newTaskName, taskId) => {
        console.log(`previous task: ${taskName}, new task: ${newTaskName}`);

        data.forEach((task) => {
            if (task.name === taskName) {
                task.name = newTaskName;
                console.log(task);
            }
        });

        console.log(data);
    };

    const cancelDataHandler = (taskName, newTaskName) => {
        console.log(`previous task: ${taskName}, new task: ${newTaskName}`);

        data.forEach((task) => {
            if (task.name === taskName) {
                newTaskName = taskName;
            }
        });

        console.log(data);
    };

    return (
        <div className="App">
            <List
                data={data}
                deleteDataHandler={deleteDataHandler}
                editDataHandler={editDataHandler}
                cancelDataHandler={cancelDataHandler}
            ></List>
            <AddTaskForm passData={dataTransfer}></AddTaskForm>
        </div>
    );
}

export default App;

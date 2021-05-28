import React, { useState } from 'react';

const NewTaskContext = React.createContext({
    tasks: [],
    onDelete: (id) => {},
    onCreate: (name, id) => {},
    onEdit: (taskName, newTaskName, id) => {},
    onCancelEdit: (taskName, newTaskName) => {},
});

export const NewTaskContextProvider = (props) => {
    const DUMMY_DATA = [
        {
            id: Date.now(),
            name: 'Learn ReactJS',
        },
    ];
    const [tasks, setTasks] = useState(DUMMY_DATA);

    const createNewTask = (task) => {
        setTasks((prevTasks) => {
            return [task, ...prevTasks];
        });
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
            return updatedTasks;
        });
    };

    const editTask = (taskName, newTaskName, taskId) => {
        console.log(`previous task: ${taskName}, new task: ${newTaskName}`);

        tasks.forEach((task) => {
            if (task.name === taskName) {
                task.name = newTaskName;
                console.log(task);
            }
        });

        console.log(tasks);
    };

    const cancelEditTask = (taskName, newTaskName) => {
        console.log(`previous task: ${taskName}, new task: ${newTaskName}`);

        tasks.forEach((task) => {
            if (task.name === taskName) {
                newTaskName = taskName;
            }
        });

        console.log(tasks);
    };

    return (
        <NewTaskContext.Provider
            value={{
                tasks: tasks,
                onDelete: deleteTask,
                onCreate: createNewTask,
                onEdit: editTask,
                onCancelEdit: cancelEditTask,
            }}
        >
            {props.children}
        </NewTaskContext.Provider>
    );
};

export default NewTaskContext;

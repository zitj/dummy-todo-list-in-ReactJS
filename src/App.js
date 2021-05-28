import React from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import List from './components/List/List';

function App() {
    return (
        <div className="App">
            <List></List>
            <AddTaskForm></AddTaskForm>
        </div>
    );
}

export default App;

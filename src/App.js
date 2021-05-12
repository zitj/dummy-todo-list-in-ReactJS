import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import List from './components/List/List';
const DUMMY_DATA = [
    {
        id: 1,
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

    const counterID = data.length + 1;

    return (
        <div className="App">
            <List data={data}></List>
            <AddTaskForm
                passData={dataTransfer}
                counterID={counterID}
            ></AddTaskForm>
        </div>
    );
}

export default App;

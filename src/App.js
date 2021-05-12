import React from 'react';

import List from './components/List/List';

function App() {
    const data = [
        {
            id: 1,
            name: 'First task',
        },
        {
            id: 2,
            name: 'Second task',
        },
    ];
    return (
        <div className="App">
            <List data={data}></List>
        </div>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { NewTaskContextProvider } from './context/new-task-context';

ReactDOM.render(
    <React.StrictMode>
        <NewTaskContextProvider>
            <App />
        </NewTaskContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

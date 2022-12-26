import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export const dialogs = [
    {id: 1, name: "Anastasiya"},
    {id: 2, name: "Elena"},
    {id: 3, name: "Dmitriy"},
    {id: 4, name: "Yuri"},
    {id: 5, name: "Natali"},
    {id: 6, name: "Natan"},
]
export const messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "where are u from?"},
]


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

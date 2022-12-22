import React from 'react';
import './App.css';
import {Technologies} from "./components/Technologies";

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">News Feed</a>
            <a href="#s">Messages</a>
        </div>
    )
}

export default App;

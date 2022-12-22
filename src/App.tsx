import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src={"https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png"}/>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>Users</div>
            </nav>
            <div className="content">Main content</div>
        </div>
    );
}

export default App;

import React from 'react';
import n from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className="item"><a>Profile</a></div>
            <div className="item"><a>Messages</a></div>
            <div className="item"><a>News</a></div>
            <div className="item"><a>Music</a></div>
            <div className="item"><a>Settings</a></div>
        </nav>
    );
};


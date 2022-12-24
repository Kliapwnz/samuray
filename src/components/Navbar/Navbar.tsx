import React from 'react';
import n from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}><a href="/profile">Profile</a></div>
            <div className={n.item}><a href="/messages">Messages</a></div>
            <div className={n.item}><a href="/news">News</a></div>
            <div className={n.item}><a href="/music">Music</a></div>
            <div className={n.item}><a href="/settings">Settings</a></div>
        </nav>
    );
};


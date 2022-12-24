import React from 'react';
import n from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}><NavLink to="/profile">Profile</NavLink></div>
            <div className={n.item}><NavLink to="/dialogs">Messages</NavLink></div>
            <div className={n.item}><NavLink to="/news">News</NavLink></div>
            <div className={n.item}><NavLink to="/music">Music</NavLink></div>
            <div className={n.item}><NavLink to="/settings">Settings</NavLink></div>
        </nav>
    );
};


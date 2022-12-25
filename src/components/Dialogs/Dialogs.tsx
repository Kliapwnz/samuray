import React from 'react';
import n from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={n.dialogs}>
            <div className={n.dialogsItems}>
                <div className={n.dialog + " " + n.active}><NavLink to="/dialogs/1">Anastasiya</NavLink></div>
                <div className={n.dialog}><NavLink to="/dialogs/2">Elena</NavLink></div>
                <div className={n.dialog}><NavLink to="/dialogs/3">Dmitriy</NavLink></div>
                <div className={n.dialog}><NavLink to="/dialogs/4">Yuri</NavLink></div>
                <div className={n.dialog}><NavLink to="/dialogs/5">Natalia</NavLink></div>
                <div className={n.dialog}><NavLink to="/dialogs/6">Nata</NavLink></div>
            </div>
            <div className={n.messages}>
                <div className={n.message}>Hello</div>
                <div className={n.message}>How are you?</div>
                <div className={n.message}>where are u from?</div>
            </div>
        </div>
    );
};


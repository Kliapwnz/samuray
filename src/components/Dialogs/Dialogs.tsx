import React from 'react';
import n from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";

export const Dialogs = () => {
    return (
        <div className={n.dialogs}>
            <div className={n.dialogsItems}>
                <div className={n.dialog + " " + n.active}><Dialog name="Anastasiya" id={1}/></div>
                <div className={n.dialog}><Dialog name="Elena" id={2}/></div>
                <div className={n.dialog}><Dialog name="Dmitriy" id={3}/></div>
                <div className={n.dialog}><Dialog name="Yuri" id={4}/></div>
                <div className={n.dialog}><Dialog name="Nataliya" id={5}/></div>
                <div className={n.dialog}><Dialog name="Natan" id={6}/></div>
            </div>
            <div className={n.messages}>
                <div className={n.message}>Hello</div>
                <div className={n.message}>How are you?</div>
                <div className={n.message}>where are u from?</div>
            </div>
        </div>
    );
};


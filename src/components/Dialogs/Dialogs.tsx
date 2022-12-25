import React from 'react';
import n from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";

export const Dialogs = () => {
    return (
        <div className={n.dialogs}>
            <div className={n.dialogsItems}>
                <DialogItem name="Anastasiya" id={1}/>
                <DialogItem name="Elena" id={2}/>
                <DialogItem name="Dmitriy" id={3}/>
                <DialogItem name="Yuri" id={4}/>
                <DialogItem name="Nataliya" id={5}/>
                <DialogItem name="Natan" id={6}/>
            </div>
            <div className={n.messages}>
                <div className={n.message}>Hello</div>
                <div className={n.message}>How are you?</div>
                <div className={n.message}>where are u from?</div>
            </div>
        </div>
    );
};


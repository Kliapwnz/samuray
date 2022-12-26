import React from 'react';
import n from "./Dialogs.module.css"
import {dialogs, messages} from "../../index";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {

    const dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={n.dialogs}>
            <div className={n.dialogsItems}>
                {dialogElements}
            </div>
            <div className={n.messages}>
                {messagesElements}
            </div>
        </div>
    );
};


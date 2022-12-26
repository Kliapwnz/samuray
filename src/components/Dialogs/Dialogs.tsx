import React from 'react';
import n from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    const dialogs = [
        {id: 1, name: "Anastasiya"},
        {id: 2, name: "Elena"},
        {id: 3, name: "Dmitriy"},
        {id: 4, name: "Yuri"},
        {id: 5, name: "Natali"},
        {id: 6, name: "Natan"},
    ]

    const messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "where are u from?"},
    ]

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


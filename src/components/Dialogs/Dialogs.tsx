import React from 'react';
import n from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {state} from "../../Redux/State"

export const Dialogs = () => {

    const dialogElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message}/>)

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


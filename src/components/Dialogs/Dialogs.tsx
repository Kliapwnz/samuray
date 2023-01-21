import React from 'react';
import n from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType, state} from "../../Redux/State"

type PropsType = {
    dialogsPage: DialogPageType
}

export const Dialogs = (props: PropsType) => {

    const dialogElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message}/>)
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessageHandler = () => {
        let text = newMessageElement.current?.value
        alert(text)
    }
    return (
        <div className={n.dialogs}>
            <div className={n.dialogsItems}>
                {dialogElements}
            </div>
            <div className={n.messages}>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessageHandler}>Send message</button>
                {messagesElements}
            </div>
        </div>
    );
};


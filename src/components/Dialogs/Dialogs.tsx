import React from 'react';
import n from "./Dialogs.module.css"
import {dialogElements, messagesElements} from "../../index";


export const Dialogs = () => {

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


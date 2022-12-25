import React from 'react';
import n from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";

export const Dialogs = () => {
    return (
        <div className={n.dialogs}>
            <div className={n.dialogsItems}>
                <Dialog name="Anastasiya" id={1}/>
                <Dialog name="Elena" id={2}/>
                <Dialog name="Dmitriy" id={3}/>
                <Dialog name="Yuri" id={4}/>
                <Dialog name="Nataliya" id={5}/>
                <Dialog name="Natan" id={6}/>
            </div>
            <div className={n.messages}>
                <div className={n.message}>Hello</div>
                <div className={n.message}>How are you?</div>
                <div className={n.message}>where are u from?</div>
            </div>
        </div>
    );
};


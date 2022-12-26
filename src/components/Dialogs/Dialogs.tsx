import React from 'react';
import n from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: "Anastasiya"},
        {id: 2, name: "Elena"},
        {id: 3, name: "Dmitriy"},
        {id: 4, name: "Yuri"},
        {id: 5, name: "Natali"},
        {id: 6, name: "Natan"},
    ]

    const messagesData = [
        {id:1 ,message:"Hello" },
        {id:2 ,message:"How are you?" },
        {id:3 ,message:"where are u from?" },
    ]

    return (
        <div className={n.dialogs}>
            <div className={n.dialogsItems}>
                <DialogItem name="Anastasiya" id={1}/>
                <DialogItem name="Elena" id={2}/>
                <DialogItem name="Dmitriy" id={3}/>
                <DialogItem name="Yuri" id={4}/>
                <DialogItem name="Natali" id={5}/>
                <DialogItem name="Natan" id={6}/>
            </div>
            <div className={n.messages}>
                <Message message="Hello"/>
                <Message message="How are you?"/>
                <Message message="where are u from?"/>
            </div>
        </div>
    );
};


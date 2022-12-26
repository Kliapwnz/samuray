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
                {dialogsData.map((e)=><DialogItem name={e.name} id={e.id}/>)}
            </div>
            <div className={n.messages}>
                <Message message="Hello"/>
                <Message message="How are you?"/>
                <Message message="where are u from?"/>
            </div>
        </div>
    );
};


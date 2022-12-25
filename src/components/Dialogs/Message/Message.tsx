import React from 'react';
import n from "../Dialogs.module.css";

type PropsType ={
    message:string
}

export const Message = (props:PropsType) => {
    return (
            <div className={n.message}>{props.message}</div>
    );
};


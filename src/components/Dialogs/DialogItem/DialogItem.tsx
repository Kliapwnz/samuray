import React from 'react';
import {NavLink} from "react-router-dom";
import n from "../Dialogs.module.css";

type PropsType = {
    name: string
    id: number
}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={n.dialog + " " + n.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};


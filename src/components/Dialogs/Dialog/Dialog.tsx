import React from 'react';
import {NavLink} from "react-router-dom";

type PropsType ={
    name:string
    id:number
}

export const Dialog = (props:PropsType) => {
    return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>

};


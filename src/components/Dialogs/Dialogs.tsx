import React from 'react';
import n from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={n.dialogs}>
            <div className={n.dialogsItems}>
                <div className={n.dialog}>Anastasiya</div>
                <div className={n.dialog}>Elena</div>
                <div className={n.dialog}>Dmitriy</div>
                <div className={n.dialog}>Yuriy</div>
                <div className={n.dialog}>Natalia</div>
                <div className={n.dialog}>Natan</div>
            </div>
            <div className={n.messages}>
                <div className={n.message}>Hello</div>
                <div className={n.message}>How are you?</div>
                <div className={n.message}>where are u from?</div>
            </div>
        </div>
    );
};

